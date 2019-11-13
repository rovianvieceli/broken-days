import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'jquery/dist/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'

import feather from 'feather-icons/dist/feather';

import './App.css';

import Nav from './Components/Navbar/nav';
import Sidebar from './Components/Menu/sidebar';
import Router from './routes';

export default class App extends React.Component {
  componentDidMount () {
    feather.replace();
  }

  render () {
    return (
      <div className="App">
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <BrowserRouter>
              <Sidebar />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <Router />
              </main>
            </BrowserRouter>
          </div>
        </div>
      </div>
    )
  }
}