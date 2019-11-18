import React from 'react';

import TableStriped from '../../Components/Tables/striped';
import SubHeader from '../../Components/SubHeader';

export default class Order extends React.Component {
    render () {
        return (
            <div>
                <SubHeader title="Pedidos" />
                <h2>Pendentes</h2>
                <TableStriped />
            </div>
        );
    }
}