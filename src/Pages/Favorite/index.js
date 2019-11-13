import React from 'react';
import TableStriped from '../../Components/Tables/striped';

export default class Favorite extends React.Component {
    state = {
        head: {
            "Código": 8,
            "Cliente": 8,
            "Telefone": 8,
            "Produto": 8,
            "Unidade de Medida": 8,
            "Endereço": 8
        },

        favorites: []
    }

    componentDidMount () {
        const favorites = [{
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

        this.setState({ favorites });
    }

    render () {
        const { head, favorites } = this.state;

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Favoritos</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Compartilhar</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Exportar</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>Semana</button>
                    </div>
                </div>

                <form className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mb-3">
                            <label htmlFor="titlelink">Título do Link</label>
                            <input type="text" className="form-control" id="titlelink" placeholder="Título link" value="" required />
                            <div className="invalid-feedback">Título do Link é obrigatório.</div>
                        </div>

                        <div className="col-sm-12 col-md-4 mb-3">
                            <label htmlFor="route">Rota</label>
                            <div className="input-group">
                                <div className="input-group-prepend"><span className="input-group-text">/</span></div>
                                <input type="text" className="form-control" id="route" placeholder="route" required />
                                <div className="invalid-feedback">Rota é obrigatório.</div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-2 mb-3">
                            <label htmlFor="email">Ícone <span className="text-muted">(Opcional)</span></label>
                            <select className="custom-select d-block w-100" id="country" required>
                                <option value="">Selecione...</option>
                                <option>United States</option>
                            </select>
                        </div>

                        <div className="col-sm-12 col-md-2 mb-3">
                            <button className="btn btn-primary btn-sm" type="submit">Salvar</button>
                        </div>
                    </div>
                </form>

                <TableStriped DataHead={head} DataGrid={favorites} />
            </div>
        )
    }
}