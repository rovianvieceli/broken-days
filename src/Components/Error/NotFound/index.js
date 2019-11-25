import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound404 extends React.Component {
    render () {
        return (
            <div>
                <h6 className="mt-3">Página não encontrada</h6>
                <small><Link to="/">Go Back</Link></small>
            </div>
        )
    }
}