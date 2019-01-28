import React, { Component, Fragment } from 'react';
import MovieListHeader from '../components/MovieListHeader.js';
import MovieList from '../components/MovieList.js';
import MoreMoviesButton from '../components/MoreMoviesButton.js';

class MovieListContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies:  [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    }
  }

  render(){
      return (
        <Fragment>
          <MovieListHeader
            header='Upcoming Film Releases for UK'/>
          <MovieList
            movies = {this.state.movies}/>
          <MoreMoviesButton
            title='More upcoming movies'
            url= 'https://www.imdb.com/calendar/?region=gb'
            />
        </Fragment>
    )
  }

}

export default MovieListContainer;
