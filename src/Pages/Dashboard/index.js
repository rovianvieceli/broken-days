import React from 'react';

import Line from '../../Components/Charts/Line';
import SubHeader from '../../Components/SubHeader';

export default class Dashboard extends React.Component {
    render () {
        return (
            <div>
                <SubHeader title="Painel de Controle" />
                <Line />
            </div>
        )
    }
}