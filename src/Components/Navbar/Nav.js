import React from 'react';

export default class Nav extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="!#">Empresa</a>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Pesquisar" aria-label="Pesquisar" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="!#">Sair</a>
                    </li>
                </ul>
            </nav>
        )
    }
}