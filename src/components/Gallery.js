import React from 'react';
// logo and icons
import plusIcon from '../assets/img/plus-solid.svg';
import syncIcon from '../assets/img/sync-solid.svg';
// json
import gallery from '../data.json';
// Firebase
import base from '../base';
// components
import Card from './Card';
import AjouterCard from './AjouterCard';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAjouter: false,
      gallery: {}
    };
    this.isAjouterClick = this.isAjouterClick.bind(this);
  }

  //firebase sync before Mounth
  componentWillMount() {
    this.ref = base.syncState(
        `gallery`, {
          context: this,
          state: 'gallery'
    });
  };
  // deconnexion BD
  componentWillUnmount() {
	  base.removeBinding(this.ref);
	};

  // Charger toutes les images
  chargerCards = () => {
   this.setState({ gallery });
  };

  // Ajouter une image
  AjouterCard =(card) => {
    const gallery = {...this.state.gallery};
    const KeysCount = Object.keys(gallery).lenght;
    console.log(KeysCount);
    gallery[`img${KeysCount+1}`] = card;
    this.setState({ gallery });
  }

  // supprimer une image
  supprimerCard = key => {
    const gallery = {...this.state.gallery};
    gallery[key] = null;
    this.setState({ gallery });
  }

  // changer state isAjouter on click
  isAjouterClick() {
    let change = !this.state.isAjouter;
    this.setState({ isAjouter: change})
  }

  render() {
    // variable
    let AjouterCardComp;

    // if state is true
    if (this.state.isAjouter) {
      AjouterCardComp = <AjouterCard AjouterCard={this.AjouterCard} isAjouterClick={this.isAjouterClick}/>
    } else {
      AjouterCardComp = "";
    }
    // loop all cards
    const Cards = Object
                  .keys(this.state.gallery)
                  .map(key => <Card key={key}
                                    keyImg={key}
                                    details={this.state.gallery[key]}
                                    supprimerCard={this.supprimerCard}/>);
    return (
      <main>
        <div className="title-wrapper">
          <h2>Gallery</h2>
        </div>
        <div className="container">
          <div className="gallery">
            {Cards}
          </div>
        </div>
        <div>
            {AjouterCardComp}
        </div>
        <div className="cta-wrapper">
          <button className="btn-action mr5" onClick={this.isAjouterClick}><img src={plusIcon} /></button>
          <button className="btn-action mr5" onClick={this.chargerCards}><img src={syncIcon} /></button>
        </div>
      </main>
    )
  }
}

export default Gallery;
