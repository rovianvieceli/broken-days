import React from 'react';
import TableStriped from '../../Components/Tables/striped';

import $ from 'jquery';

import iconsJson from 'feather-icons/dist/icons.json'
import SubHeader from '../../Components/SubHeader';

export default class Favorite extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            tableHead: [{
                label: "Código",
                size: 10
            }, {
                label: "Link",
                size: 35
            }, {
                label: "Rota",
                size: 35
            }, {
                label: "Ícone",
                size: 20
            }],
            favoriteIcon: 'selecione',
            favorites: [],
            icons: []
        };

        this.handleFavoriteIcon = this.handleFavoriteIcon.bind(this);
    }

    handleFavoriteIcon (event) {
        const { inputValue } = event.target;
        const $select = $('select#favorite-icon');
        const preview = '<div class="input-group-append input-group-text"><span data-feather=' + inputValue + '></span></div>';

        $select.after(preview);
        this.setState({ favoriteIcon: inputValue });
    }

    componentDidMount () {
        const icons = Object.keys(iconsJson).map(icon => {
            let humanize = icon.replace(/\b[a-z]/g, letter => letter.toUpperCase()).replace(/-/g, ' ');

            return { name: humanize, alias: icon }
        });

        const favorites = [{
            codigo: 504,
            link: 'Mês Atual',
            route: '/report-now-month',
            icon: 'star'
        }];

        this.setState({ icons, favorites });
    }

    render () {
        const { tableHead, favorites, icons } = this.state;

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
                            <label htmlFor="favorite-icon">Ícone</label>
                            <div className="input-group">
                                <select className="custom-select" id="favorite-icon"
                                    value={this.state.favoriteIcon} onChange={this.handleFavoriteIcon}>
                                    <option value="selecione">Selecione</option>
                                    {icons.map((item, key) => {
                                        return <option key={key} value={item.alias}>{item.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-2">
                            <label htmlFor="submit">&nbsp;</label>
                            <div className="input-group">
                                <button id="submit" type="submit" className="btn btn-outline-secondary">
                                    <span data-feather="plus"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                <TableStriped DataHead={tableHead} DataGrid={favorites} />
            </div>
        )
    }
}
