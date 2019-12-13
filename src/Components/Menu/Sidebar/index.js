import React from 'react';
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
    render () {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Painel
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/order" className="nav-link">
                                Pedidos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">
                                Produtos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/customer" className="nav-link">
                                Clientes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/report" className="nav-link">
                                Relatórios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/integration" className="nav-link">
                                Integrações
                            </Link>
                        </li>
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Favoritos</span>
                        <Link to="/favorite" className="d-flex align-items-center text-muted">
                            New
                        </Link>
                    </h6>

                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Mês Atual</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}