import React, { Component } from 'react';
import Word from './Word';

export default class WordList extends Component {
    state = {
        words: [
            { id: 'ab123', en: 'One', vn: 'Mot', isMemorized: true },
            { id: 'ab124', en: 'Two', vn: 'Hai', isMemorized: false },
            { id: 'ab125', en: 'Three', vn: 'Ba', isMemorized: false },
            { id: 'ab126', en: 'Four', vn: 'Bon', isMemorized: true },
        ]
    }
    genListWord() {
        return this.state.words.map(word => (
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
