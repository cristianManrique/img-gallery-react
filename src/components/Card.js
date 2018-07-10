import React from 'react';

class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <img src={this.props.details.image} alt=""/>
        <span className="text-wrapper">
          <h3 className="title">{this.props.details.title}</h3>
          <p className="text">{this.props.details.text}</p>
          <button className="btn-primary" onClick={ () => this.props.supprimerCard(this.props.keyImg)}>Supprimer</button>
        </span>
      </div>
    )
  };
};

export default Card;
