import React from 'react';

export default class NotFound404 extends React.Component {
    render () {
        return (
            <div className="alert alert-primary" role="alert">
                <p>Página não encontrada</p> <a href="/" className="alert-link">Voltar ao Painel</a>
            </div>
        )
    }
}