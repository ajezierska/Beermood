import React from "react";


class Form extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.getBeer}>
        <h2>Find your perfect beer</h2>

        <div className="param-container">
          <p className="param-names">
            power <br/>
            biterness <br/>
            color <br/>
          </p>

          <div className="icons">
            <i className="fas fa-beer fa-xs"></i>
            <img src="https://png.icons8.com/windows/50/000000/hops.png" alt="hops" width="20px"/>
            <i className="far fa-circle fa-xs"></i>
          </div>

          <div className="zippers">
              <input type="range" name="abv_gt" min="0" max="2" className="zipper"/>

              <input type="range" name="ibu_gt" min="0" max="3" className="zipper"/>

              <input type="range" name="ebc_gt" min="0" max="3" className="zipper"/>
          </div>

          <div className="icons">
            <i className="fas fa-beer fa-lg"></i>
            <img src="https://png.icons8.com/android/50/000000/hops.png" alt="more hops" width="15px"/>
            <i className="fas fa-circle fa-xs"></i>
          </div>

        </div>


        <button className="btn">Go beer!</button>

      </form>
    );
  }
};

export default Form;
