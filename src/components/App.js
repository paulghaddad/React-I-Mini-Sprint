import React, { Component } from 'react';
import MoviesList from './MoviesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ['Robin Hood', 'Rocky', 'Karate Kid'],
    };
  }

  render() {
    return (
      <MoviesList movies={this.state.movies} />
    );
  }
}

export default App;
