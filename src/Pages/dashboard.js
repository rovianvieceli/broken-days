import React from 'react';

import TableStriped from '../Components/Tables/Striped';
import Line from '../Components/Charts/Line';

export default class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Painel de Controle</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group mr-2">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Compartilhar</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Exportar</button>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>Semana</button>
                    </div>
                </div>
                <Line />

                <h2>Vendas</h2>
                <TableStriped />
            </div>
        )
    }
}