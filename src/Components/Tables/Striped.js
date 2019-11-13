import React from 'react';


export default class TableStriped extends React.Component {

    handlerMakeRowsHead (data = {}) {
        const rows = Object.keys(data);

        if (rows.length) {
            const th = rows.map((title, key) => (React.createElement('th', { key: key, 'width': `${data[title]}%` }, title)));
            const list = React.createElement('tr', {}, th);

            return list
        }
    }

    handlerMakeRowsBody (data = []) {
        if (data.length) {
            const rows = data.map((row, key) => (
                React.createElement('tr', { key: key }, [
                    Object.values(row).map((value, key) => (
                        React.createElement('td', { key: key }, value)
                    ))
                ])

            ))

            return rows;
        }
    }

    render () {
        const { DataHead, DataGrid } = this.props;

        return (
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        {this.handlerMakeRowsHead(DataHead)}
                    </thead>
                    <tbody>
                        {this.handlerMakeRowsBody(DataGrid)}
                    </tbody>
                </table>
            </div>
        )
    }
}