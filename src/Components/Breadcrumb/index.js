import React from 'react';

export default class BreadCrumb extends React.Component {
    render () {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb d-flex bg-transparent">
                    <li className="breadcrumb-item"><a href="!#">Link A</a></li>
                    <li className="breadcrumb-item"><a href="!#">Link B</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Link C</li>
                </ol>
            </nav>
        )
    }
}