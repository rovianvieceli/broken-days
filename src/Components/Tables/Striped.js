import React from 'react';

export default class TableStriped extends React.Component {
    handlerMakeRows (rows = []) {
        let row = '';

        row = <tr><td colSpan="5">Nenhum registro localizado</td></tr>;

        if (rows.length) {
            row = rows.map((row, key) => {
                return <tr key={key}>
                    <td>{row.codigo}</td>
                    <td>{row.nome}</td>
                    <td>{row.produto}</td>
                    <td>{row.unidade}</td>
                    <td>{row.telefone}</td>
                    <td>{row.endereco}</td>
                </tr>;
            });
        }

        return row;
    }

    render () {
        const { data } = this.props;

        return (
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th width="8%">Código</th>
                            <th>Cliente</th>
                            <th>Contato</th>
                            <th>Unidade Medida</th>
                            <th>Produto</th>
                            <th>Endereço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.handlerMakeRows(data)}
                    </tbody>
                </table>
            </div>
        )
    }
}