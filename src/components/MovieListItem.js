import React, { Component } from 'react';

class MovieListItem extends Component {

  render(){
    return (
      <li><a href={this.props.url}>{this.props.name}</a></li>
    );
  }

}

export default MovieListItem;
