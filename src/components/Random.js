import React from "react";


class Random extends React.Component {
  render(){
    return (
      <div onClick={this.props.getRandomBeer}>
        <button>random beer</button>
      </div>
    );
  }
};

export default Random;
