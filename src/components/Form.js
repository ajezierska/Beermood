import React from "react";


class Form extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.getBeer}>
        <h2>Find your perfect beer</h2>
    
        <label>ABV %:
          <input type="range" name="abv_gt" min="0" max="2" />
        </label>

        <label>IBU :
          <input type="range" name="ibu_gt" min="0" max="3"/>
        </label>

        <label>Color beer:
          <input type="range" name="ebc_gt" min="0" max="3"/>
        </label>
        <button>Go beer!</button>

      </form>
    );
  }
};

export default Form;
