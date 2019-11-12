import React from 'react';

export default class TableStriped extends React.Component {
    handlerMakeRows (rows = []) {
        let row = `<tr><td colSpan="5">`;
        if (rows.length)
            row += `adasd`;

        row += `Nenhum registro localizado</td></tr>`;

        return row;
    }

    render () {
        const { data } = this.props;

        return (
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Produto</th>
                            <th>Cliente</th>
                            <th>Contato</th>
                            <th>Unidade Medida</th>
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