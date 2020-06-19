import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardsList from './components/CardsList'
import data from './data'

const App = () => {
  return (
    <>
      <h1> Fury Babies &#127773;</h1>
      <CardsList {...data} />
    </>
  );
}

export default App;
