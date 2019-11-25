import React from 'react';
import { Link } from "react-router-dom";

import $ from 'jquery';

export default class Sidebar extends React.Component {

    constructor (props) {
        super(props)

        this.handlerActive.bind(this);
    }

    componentDidMount () {
        const { pathname } = window.location;
        const $link = $(`a[href="${pathname}"]`);

        $link.addClass('active')
    }

    handlerActive (event) {
        const $link = $(event.target);

        $link.parents('ul').find('li > a').removeClass('active');
        $link.addClass('active');
    }

    render () {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={this.handlerActive.bind(this)}>
                                <span data-feather="home"></span>Painel
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/order" className="nav-link" onClick={this.handlerActive.bind(this)}>
                                <span data-feather="activity"></span>Pedidos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link" onClick={this.handlerActive.bind(this)}>
                                <span data-feather="shopping-cart"></span> Produtos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/customer" className="nav-link" onClick={this.handlerActive.bind(this)}>
                                <span data-feather="users"></span>Clientes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/report" className="nav-link" onClick={this.handlerActive.bind(this)}>
                                <span data-feather="bar-chart-2"></span>Relatórios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/integration" className="nav-link" onClick={this.handlerActive.bind(this)}>
                                <span data-feather="layers"></span>Integrações
                            </Link>
                        </li>
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Favoritos</span>
                        <Link to="/favorite" className="d-flex align-items-center text-muted" onClick={this.handlerActive.bind(this)}>
                            <span data-feather="plus-circle"></span>
                        </Link>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#!">
                                <span data-feather="star"></span>
                                Mês Atual
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}