import React from "react";


class Form extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.getBeer}>
        <h2>Find your perfect beer</h2>

      <div className="zippers">
          <input type="range" name="abv_gt" min="0" max="2" className="zipper"/>

          <input type="range" name="ibu_gt" min="0" max="3" className="zipper"/>

          <input type="range" name="ebc_gt" min="0" max="3" className="zipper"/>
        </div>


        <button className="btn">Go beer!</button>

      </form>
    );
  }
};

export default Form;
