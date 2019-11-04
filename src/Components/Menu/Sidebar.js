import React from 'react';

export default class Sidebar extends React.Component {
    render () {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="!#">
                                <span data-feather="home"></span>
                                Painel <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="file"></span>
                                Pedidos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="shopping-cart"></span>
                                Produtos
                                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="users"></span>
                                Clientes
                                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="bar-chart-2"></span>
                                Relatórios
                                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="layers"></span>
                                Integrações
                                </a>
                        </li>
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Relatório Salvos</span>
                        <a className="d-flex align-items-center text-muted" href="!#">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="file-text"></span>
                                Mês Atual
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="file-text"></span>
                                Últimos 4 meses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="file-text"></span>
                                Compromisso Social
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">
                                <span data-feather="file-text"></span>
                                Vendas fim de ano
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}