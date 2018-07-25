import React, { Component } from 'react';
import Word from './Word';

export default class WordList extends Component {
    onDelete = (id) => {
        this.setState(prevState => ({ words: prevState.words.filter(w => w.id !== id) }));
    }

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
                onDelete={this.onDelete}
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
