import React from "react";


class Beer extends React.Component {
  render(){
    return (
      <div>
        <h3>{this.props.nameBeer}</h3>
        <h4>{this.props.shortDesc}</h4>
        <img src={this.props.image} height="350"/>
        <p>{this.props.description}</p>
        {this.props.abv && <p>ABV: {this.props.abv}</p> }
        {this.props.ibu && <p>IBU: {this.props.ibu}</p>}
        {this.props.food && this.props.foodSec && this.props.foodThird && <p>Drink it with food: {this.props.food}, {this.props.foodSec}, {this.props.foodThird}</p>}
      </div>
    );
  }
};

export default Beer;
