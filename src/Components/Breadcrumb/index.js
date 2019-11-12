import React from 'react';

export default class BreadCrumb extends React.Component {
    render () {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb d-flex bg-transparent">
                    <li className="breadcrumb-item"><a href="!#">Painel</a></li>
                    <li className="breadcrumb-item"><a href="!#">Produtos</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Item </li>
                </ol>
            </nav>
        )
    }
}