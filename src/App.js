import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'jquery/dist/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'

import './App.css';

import Nav from './Components/Navbar/Nav';
import Sidebar from './Components/Menu/Sidebar';
import Router from './routes';

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <Router />
              </main>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}