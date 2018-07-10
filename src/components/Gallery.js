import React from 'react';
// Logo and icons
import plusIcon from '../assets/img/plus-solid.svg';
import syncIcon from '../assets/img/sync-solid.svg';
// Data en json
import gallery from '../assets/data/data.json';
// Firebase
import base from '../base';
// Components
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
  };

  // Sync firebase BD avant de compiler
  componentWillMount() {
  this.ref = base.syncState(
  `gallery`, {
  context: this,
  state: 'gallery'
  });
  };
  // Deconnexion BD
  componentWillUnmount() {
  base.removeBinding(this.ref);
  };

  // Charger toutes les cards
  chargerCards = () => {
  this.setState({ gallery });
  };

  // method: Ajouter une card
  AjouterCard =(card) => {
  const gallery = {...this.state.gallery};
  const KeysCount = Object.keys(gallery).length;
  gallery[`img${KeysCount+1}`] = card;
  this.setState({ gallery });
  }

  // method: Supprimer une card
  supprimerCard = key => {
  const gallery = {...this.state.gallery};
  gallery[key] = null;
  this.setState({ gallery });
  }

  // method: Changer state {true or false} de isAjouter au clic
  isAjouterClick() {
  let change = !this.state.isAjouter;
  this.setState({ isAjouter: change})
  }

  render() {
  // Déclarer variable
  let AjouterCardComp;

  // Afficher selon l'état {true or false} de isAjouter
  if (this.state.isAjouter) {
  AjouterCardComp = <AjouterCard AjouterCard={this.AjouterCard} isAjouterClick={this.isAjouterClick}/>
  } else {
  AjouterCardComp = "";
  }
  // loop all cards
  const Cards = Object
          .keys(this.state.gallery)
          .map(key => <Card key={key} keyImg={key}
                            details={this.state.gallery[key]}
                            supprimerCard={this.supprimerCard}/>);
  return (
    <main>
      <div className="title-wrapper">
        <h2>Gallerie</h2>
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
        <button className="btn-action mr10" onClick={this.isAjouterClick}><img src={plusIcon} alt="icon ajouter"/></button>
        <button className="btn-action mr10" onClick={this.chargerCards}><img src={syncIcon} alt="icon sync"/></button>
      </div>
    </main>
  )
};
};

export default Gallery;
