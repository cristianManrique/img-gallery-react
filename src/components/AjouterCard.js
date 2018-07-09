import React from 'react';

class AjouterCard extends React.Component {

  creerCard = event => {
    event.preventDefault();

    // recupperer les values des inputs
    const card = {
      image: this.image.value,
      text: this.text.value,
      title: this.title.value
    }
    // Ajouter une card
    this.props.AjouterCard(card);
    // Reset
    this.cardForm.reset();
    // hide AjouterCard
    this.props.isAjouterClick();
  }

  render() {
        return (
          <div className="modal" id="myModal">
            <div className="modal-content">
              <span className="btn-close" onClick={this.props.isAjouterClick}>&times;</span>
              <form className="formCard" ref={input => this.cardForm = input } onSubmit={e => this.creerCard(e)}>
                <ul>
                  <li><h4>Ajouter une image</h4></li>
                  <li><input ref={input => this.title = input} type="text" placeholder="titre" /></li>
                  <li><textarea ref={input => this.text = input} type="text" rows="3" placeholder="description"></textarea></li>
                  <li><input ref={input => this.image = input} type="text" placeholder="Url de l'image" /></li>
                  <li><button className="btn-submit" type="submit"> Ajouter</button></li>
                </ul>
              </form>
            </div>
          </div>

        )
      }
}

export default AjouterCard;
