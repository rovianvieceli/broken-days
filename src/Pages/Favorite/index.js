import React from 'react';
import TableStriped from '../../Components/Tables/striped';

import iconsJson from 'feather-icons/dist/icons.json'
import SubHeader from '../../Components/SubHeader';

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
        favorites: [],
        icons:[]
    }

    componentDidMount () {
        const icons = Object.keys(iconsJson).map((icon) => ({name: icon}));
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

        this.setState({ icons, favorites });
    }

    render () {
        const { head, favorites } = this.state;

        return (
            <div>
                <SubHeader title='Favoritos'/>

                <form className="needs-validation" noValidate>
                    <div className="row mb-3">
                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="titlelink">Título do Link</label>
                            <input type="text" className="form-control" id="titlelink" placeholder="Título link" required />
                            <div className="invalid-feedback">Título do Link é obrigatório.</div>
                        </div>

                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="route">Rota</label>
                            <div className="input-group">
                                <div className="input-group-prepend"><span className="input-group-text">/</span></div>
                                <input type="text" className="form-control" id="route" placeholder="route" required />
                                <div className="invalid-feedback">Rota é obrigatório.</div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-3">
                            <label htmlFor="route">Rota</label>
                            <div className="input-group">
                                <div className="input-group-prepend"><span className="input-group-text">/</span></div>
                                <input type="text" className="form-control" id="route" placeholder="route" required />
                                <div className="invalid-feedback">Rota é obrigatório.</div>
                            </div>
                        </div>
                    </div>
                </form>

                <TableStriped DataHead={head} DataGrid={favorites} />
            </div>
        )
    }
}