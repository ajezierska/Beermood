import React from "react";


class BeerByName extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.getBeerName}>
        <h2>or search by beer-name:</h2>
        <input type='text' name='beerName' placeholder='Apa, Ipa...'/>
        <button>Search!</button>
      </form>
    );
  }
};

export default BeerByName;
