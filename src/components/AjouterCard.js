import React from 'react';
import imagesData from '../assets/data/imagesData.json';

class AjouterCard extends React.Component {

  creerCard = event => {
    event.preventDefault();
    // Recupperer valeurs des inputs
    const card = {
      image: this.image.value,
      text: this.text.value,
      title: this.title.value
    }
    // Ajouter la nouvelle card
    this.props.AjouterCard(card);
    // Reset du formulaire
    this.cardForm.reset();
    // Cacher le modal
    this.props.isAjouterClick();
  };

  render() {
      // loop to create select options
      let imagesDataOption= imagesData.map((e, key) => {
          return <option key={key} value={e.url}>{e.name}</option>;
      });

        return (
          <div className="modal" id="myModal">
            <div className="modal-content">
              <span className="btn-close" onClick={this.props.isAjouterClick}>&times;</span>
              <form className="formCard" ref={input => this.cardForm = input } onSubmit={e => this.creerCard(e)}>
                <ul>
                  <li><h4>Ajouter une image</h4></li>
                  <li><input ref={input => this.title = input} type="text" placeholder="titre" /></li>
                  <li><textarea ref={input => this.text = input} type="text" rows="3" placeholder="description"></textarea></li>
                  <li>
                    <select name="country" ref={input => this.image = input} >
                       {imagesDataOption}
                    </select>
                  </li>
                  <li><button className="btn-submit" type="submit"> Ajouter</button></li>
                </ul>
              </form>
            </div>
          </div>
        )
      };
};

export default AjouterCard;
