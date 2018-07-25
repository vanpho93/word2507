import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        return (
            <div className="word">
                <div className="word-container">
                    <h3 className="text-success">One</h3>
                    <h3 className="text-danger">Mot</h3>
                </div>
                    <div className="btn-container">
                    <button className="btn btn-success">
                        Forgot
                    </button>
                    <button
                        className="btn btn-warning"
                    >
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}
