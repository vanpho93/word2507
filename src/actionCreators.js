export function removeWord(id) {
    return { type: 'REMOVE_WORD', id };
}

export function addWord(en, vn) {
    const word = { id: Date.now(), en, vn, isMemorized: false };
    return { type: 'ADD_WORD', word };
}
