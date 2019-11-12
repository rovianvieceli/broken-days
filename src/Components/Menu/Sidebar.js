import React from 'react';
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
    render () {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">
                                <span data-feather="home"></span>Painel <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/order" className="nav-link">
                                <span data-feather="activity"></span>Pedidos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">
                                <span data-feather="shopping-cart"></span> Produtos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/customer" className="nav-link">
                                <span data-feather="users"></span>Clientes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/report" className="nav-link">
                                <span data-feather="bar-chart-2"></span>Relatórios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/integration" className="nav-link">
                                <span data-feather="layers"></span>Integrações
                            </Link>
                        </li>
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Favoritos</span>
                        <a className="d-flex align-items-center text-muted" href="!#">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="star"></span>
                                Mês Atual
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="star"></span>
                                Últimos 4 meses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="star"></span>
                                Compromisso Social
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="star"></span>
                                Vendas fim de ano
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}