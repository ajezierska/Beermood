import React from "react";


class Beer extends React.Component {
  render(){
    return (
      <div>
        <h3>{this.props.nameBeer}</h3>
        <h4>{this.props.shortDesc}</h4>
        {this.props.image && <img src={this.props.image} height="350" alt="beerimage"/>}
        <p>{this.props.description}</p>
        {this.props.abv && <p>ABV: {this.props.abv}</p>}
        {this.props.ibu && <p>IBU: {this.props.ibu}</p>}
        {this.props.food && this.props.foodSec && this.props.foodThird && <p>Drink it with food: {this.props.food}, {this.props.foodSec}, {this.props.foodThird}</p>}



        {el.name & <h3>{el.name}</h3>}
        {el.tagline & <h4>{el.tagline}</h4>}
        {el.image_url & <img src={el.image_url} height="350" alt="beer_image"/>}
        {el.description & <p>{el.description}</p>}
        {el.abv & <p>ABV: {el.abv}</p>}
        {el.ibu & <p>IBU: {el.ibu}</p>}
        {el.food.food_pairing & <p>Drink it with food: {el.food_pairing[0]}, {el.food_pairing[1]}, {el.food_pairing[2]}</p>}
      </div>
    );
  }
};

export default Beer;
