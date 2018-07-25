import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './actionCreators';

class Word extends Component {
    render() {
        const { wordInfo, removeWord } = this.props;
        return (
            <div className="word">
                <div className="word-container">
                    <h3 className="text-success">{wordInfo.en}</h3>
                    <h3 className="text-danger">{wordInfo.vn}</h3>
                </div>
                    <div className="btn-container">
                    <button className="btn btn-success">
                        Forgot
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => removeWord(wordInfo.id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, actionCreators)(Word);
