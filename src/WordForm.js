import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actionCreators';

class WordForm extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
    }

    addWord = () => {
        const { txtEn, txtVn } = this.state;
        this.props.addWord(txtEn, txtVn);
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        return (
            <div className="form-group" style={{ width: '200px' }}>
                <input
                    className="form-control"
                    placeholder="English"
                    value={this.state.txtEn}
                    onChange={evt => this.setState({ txtEn: evt.target.value })}
                />
                <br />
                <input
                    className="form-control"
                    placeholder="Vietnamese"
                    value={this.state.txtVn}
                    onChange={evt => this.setState({ txtVn: evt.target.value })}
                />
                <br />
                <button
                    className="btn btn-success"
                    onClick={this.addWord}
                >
                    Add word
                </button>
            </div>
        );
    }
}

export default connect(null, actionCreators)(WordForm);
