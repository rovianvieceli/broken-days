import React from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize.js';

import Navbar from './Page/Navbar';
import Header from './Page/Header';
import ActionButton from './Components/Menu/actionbutton';
import Footer from './Page/Footer';
import Card from './Components/Card';

export default class App extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <main>
          <Card />
          <ActionButton />
        </main>
        <Footer />
      </div>
    )
  }
}