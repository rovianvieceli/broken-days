import React from 'react';

import 'jquery/dist/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'

import feather from 'feather-icons/dist/feather';

import './App.css';

import Nav from './Components/Navbar/Nav';
import Sidebar from './Components/Menu/Sidebar';
import BreadCrumb from './Components/Breadcrumb/Breadcrumb';
import Dashboard from './Pages/dashboard';

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
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <BreadCrumb />
              <Dashboard />
            </main>
          </div>
        </div>
      </div>
    )
  }
}