import React from "react";

import Beermood from "./components/Beermood";
import Form from "./components/Form";
import Random from "./components/Random";
import BeerName from "./components/BeerName";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beerList: [],
    }
  }
  getBeer = async (e) => {
    e.preventDefault();
    const abv_gt = Number(e.target.elements.abv_gt.value)*3;
    const abv_lt = Number(abv_gt + 4);
    const ibu_gt = Number(e.target.elements.ibu_gt.value)*25;
    const ibu_lt = Number(ibu_gt + 26);
    const ebc_gt = Number(e.target.elements.ebc_gt.value)*25;
    const ebc_lt = Number(ebc_gt + 26);
    const api_call = await fetch(`https://api.punkapi.com/v2/beers?abv_gt=${abv_gt}&abv_lt=${abv_lt}&ibu_gt=${ibu_gt}&ibu_lt=${ibu_lt}&ebc_gt=${ebc_gt}&ebc_lt=${ebc_lt}`);
    const data = await api_call.json();
    console.log(data);
    console.log(`abv: ${abv_gt} - ${abv_lt}, ibu: ${ibu_gt} - ${ibu_lt}, ebc: ${ebc_gt} - ${ebc_lt}`);
    this.setState({
      beerList: data,
    })
  }
  getRandomBeer = async (e) => {
    e.preventDefault();
    const api_call = await fetch('https://api.punkapi.com/v2/beers/random');
    const data = await api_call.json();
    console.log(data);
    this.setState({
      beerList: data,
    })
  }

  getBeerName = async (e) => {
    e.preventDefault();
    const beerNameValue = e.target.elements.beerName.value;
    let beerName = '';
    if (beerNameValue !== '') {
      beerName = `&beer_name=${beerNameValue}`;
    }
    const api_call = await fetch(`https://api.punkapi.com/v2/beers?${beerName}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      beerList: data,
    })
  }

  render(){
    let list = this.state.beerList.map((el) => (
      <div key={el.id} className="beerList">
        <hr/>
        <h3>{el.name}</h3>
        <h4>{el.tagline}</h4>
        <img src={el.image_url} height="300" alt="beer_image"/>
        <p>{el.description}</p>
        <p className="beer-food"><span>Drink it with food: </span><br/>{el.food_pairing[0]}, {el.food_pairing[1]}, {el.food_pairing[2]}</p>
        <p className="beer-param">
          <span>ABV: {el.abv}</span>
          <span>IBU: {el.ibu}</span>
          <span>EBC: {el.ebc}</span>
        </p>

      <hr/>
      </div>
    ))
    return (
      <div className="container">
        <div className="box">
          <div className="beers">{list}</div>
          <div className="parameters">
            <Beermood />
            <hr/>
            <Random getRandomBeer={this.getRandomBeer}/>
            <hr/>
            <Form getBeer={this.getBeer}/>
            <hr/>
            <BeerName getBeerName={this.getBeerName}/>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
