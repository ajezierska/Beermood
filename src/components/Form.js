import React from "react";


class Form extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.getBeer}>
        <h2>Find your perfect beer</h2>
        <input type='text' name='type' placeholder='Apa, Ipa...'/>
        <button>Go beer!</button>

      </form>
    );
  }
};

export default Form;
