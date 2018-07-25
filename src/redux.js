import { createStore } from 'redux';

const defaultWords = [
    { id: 'ab123', en: 'One', vn: 'Sau', isMemorized: true },
    { id: 'ab124', en: 'Two', vn: 'Hai', isMemorized: false },
    { id: 'ab125', en: 'Three', vn: 'Ba', isMemorized: false },
    { id: 'ab126', en: 'Four', vn: 'Bon', isMemorized: true },
];

function reducer(state = { words: defaultWords }, action) {
    if (action.type === 'REMOVE_WORD') {
        const words = state.words.filter(w => w.id !== action.id);
        return { ...state, words };
    }
    return state;
}

export const store = createStore(reducer);
