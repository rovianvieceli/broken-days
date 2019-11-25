import React from 'react';
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow navbar-expand">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTopContent"
                    aria-controls="navbarTopContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0" content="Empresa">
                    Empresa
                </Link>

                <input className="form-control form-control-dark w-100" type="text"
                    placeholder="Pesquisar" aria-label="Pesquisar" />

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link to="/logout" className="nav-link">
                            Sair
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}