import React from 'react';
import TableStriped from '../../Components/Tables/striped';

import iconsJson from 'feather-icons/dist/icons.json'
import SubHeader from '../../Components/SubHeader';

export default class Favorite extends React.Component {
    state = {
        head: {
            "Código": 10,
            "Link": 35,
            "Rota": 35,
            "Ícone": 20
        },
        favorites: [],
        icons: []
    }

    componentDidMount () {
        const icons = Object.keys(iconsJson).map((icon) => ({ name: icon }));
        const favorites = [{
            codigo: 504,
            link: 'Mês Atual',
            route: '/report-now-month',
            icon: 'star'
        }];

        this.setState({ icons, favorites });
    }

    render () {
        const { head, favorites } = this.state;

        return (
            <div>
                <SubHeader title='Favoritos' />

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
                            <label htmlFor="route">Ícone</label>
                            <div className="input-group">
                                <select class="custom-select" id="inputGroupSelect01">
                                    <option selected>Selecione</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-2">
                            <label htmlFor="submit">&nbsp;</label>
                            <div className="input-group">
                                <button id="submit" type="submit" class="btn btn-outline-secondary">
                                    <span data-feather="plus"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                <TableStriped DataHead={head} DataGrid={favorites} />
            </div>
        )
    }
}