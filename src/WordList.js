import React, { Component } from 'react';
import { connect } from 'react-redux';
import Word from './Word';

class WordList extends Component {
    genListWord() {
        return this.props.words.map(word => (
            <Word
                wordInfo={word}
                key={word.id}
            />
        ));
    }

    render() {
        return (
            <div>
                { this.genListWord() }
            </div>
        );
    }
}

const mapStateToProps = state => ({ words: state.words });

export default connect(mapStateToProps)(WordList);
