import React, { Component } from 'react';
import MovieListItem from './MovieListItem';

class MovieList extends Component{

  render(){
      const movies = this.props.movies.map((movieObject, index) => {
        return <MovieListItem
          key = {index}
          name = {movieObject.name}
          url = {movieObject.url}
          />
      });
      return (
        <ul>{movies}</ul>
      );
  }


}

export default MovieList;
