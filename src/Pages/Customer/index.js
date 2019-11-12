import React from 'react';

import TableStriped from '../../Components/Tables/striped';

export default class Order extends React.Component {
    state = {
        customer: []
    }

    componentDidMount () {
        const customer = [{
            codigo: 504,
            nome: 'Prumis Hbb LTDA',
            telefone: '0555135905718',
            produto: 'Cabeçote Heller',
            unidade: 'PÇ',
            endereco: 'Rua Candido de Luz de Oliveira, 122',
        }, {
            codigo: 201,
            nome: 'Gedor do Brasil',
            telefone: '0555136598759',
            produto: 'Chave Inglesa',
            unidade: 'UN',
            endereco: 'Rua da hotencias, 22',
        }, {
            codigo: 708,
            nome: 'Gerdau LTDA',
            telefone: '0555155698547',
            produto: 'Aço mola SAE 25666',
            unidade: 'BN',
            endereco: 'Rua Marechal Floriano, 13',
        }, {
            codigo: 78,
            nome: 'Tramontina',
            telefone: '0555133986694',
            produto: 'Faquiro de patra',
            unidade: 'JG',
            endereco: 'Rua Idependencia, 1822',
        }, {
            codigo: 65,
            nome: 'Randon',
            telefone: '0555199865968',
            produto: 'Balde lavabo',
            unidade: 'UN',
            endereco: 'Rua Ciciliano Luiz Dutra, 578',
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