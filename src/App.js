import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Nav from './Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
        isLargeRow={false}
      />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title='Comedy'
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
      />
    </div>
  );
}

export default App;
