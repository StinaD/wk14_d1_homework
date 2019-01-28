import React, { Component } from 'react';

class MoreMoviesButton extends Component {

  render(){
    return (
      <a href={this.props.url}>
        <button >{this.props.title}</button>
      </a>
    );
  }

}

export default MoreMoviesButton;
