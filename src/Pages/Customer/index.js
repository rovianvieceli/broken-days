import React from 'react';

import TableStriped from '../../Components/Tables/striped';

export default class Order extends React.Component {
    state = {
        customer: []
    }

    componentDidMount () {
        const customer = [{
            codigo: 201,
            nome: 'Prumis Hbb LTDA',
            endereco: 'Rua Candido de Luz de Oliveira, 122',
            telefone: '0555135905718'
        }];

        this.setState({customer});
    }

    render () {
        const { customer } = this.state;

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Clientes</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Compartilhar</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Exportar</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>Semana</button>
                    </div>
                </div>

                <h2>Contatos</h2>
                <TableStriped data={customer} />
            </div>
        );
    }
}