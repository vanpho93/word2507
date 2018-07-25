import { createStore } from 'redux';

function reducer(state = { words: [] }, action) {
    if (action.type === 'ADD_WORD') {
        const words = [...state.words, action.word];
        return { ...state, words };
    }
    if (action.type === 'REMOVE_WORD') {
        const words = state.words.filter(w => w._id !== action._id);
        return { ...state, words };
    }
    return state;
}

export const store = createStore(reducer);
