import React, { Component } from 'react';
import { connect } from 'react-redux';
import Word from './Word';
import WordForm from './WordForm';

class WordList extends Component {
    genListWord() {
        return this.props.words.map(word => (
            <Word
                wordInfo={word}
                key={word._id}
            />
        ));
    }

    render() {
        return (
            <div>
                <WordForm />
                { this.genListWord() }
            </div>
        );
    }
}

const mapStateToProps = state => ({ words: state.words });

export default connect(mapStateToProps)(WordList);
