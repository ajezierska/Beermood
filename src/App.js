import React from "react";

import Beermood from "./components/Beermood";
import Form from "./components/Form";
import Beer from "./components/Beer";
import Random from "./components/Random";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameBeer: undefined,
      image: undefined,
      shortDesc: undefined,
      description: undefined,
      abv: undefined,
      ibu: undefined,
      food: undefined,
      foodSec: undefined,
      foodThird: undefined,
      error: undefined
    }
  }
  getBeer = async (e) => {
    e.preventDefault();
    const api_call = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80');
    const data = await api_call.json();
    console.log(data);


  }
  getRandomBeer = async (e) => {
    e.preventDefault();
    const api_call = await fetch('https://api.punkapi.com/v2/beers/random');
    const data = await api_call.json();
    console.log(data);
    this.setState({
      nameBeer: data[0].name,
      image: data[0].image_url,
      shortDesc: data[0].tagline,
      description: data[0].description,
      abv: data[0].abv,
      ibu: data[0].ibu,
      food: data[0].food_pairing[0],
      foodSec: data[0].food_pairing[1],
      foodThird: data[0].food_pairing[2],
      error: '',
    })
  }
  render(){
    return (
      <div>
        <Beermood />
        <Random getRandomBeer={this.getRandomBeer}/>
        <Form getBeer={this.getBeer}/>
        <Beer
          nameBeer={this.state.nameBeer}
          image={this.state.image}
          shortDesc={this.state.shortDesc}
          description={this.state.description}
          abv={this.state.abv}
          ibu={this.state.ibu}
          food={this.state.food}
          foodSec={this.state.foodSec}
          foodThird={this.state.foodThird}
          error={this.state.error}
        />
      </div>
    );
  }
};

export default App;
