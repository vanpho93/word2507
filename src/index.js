import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootNode = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(rootNode, document.getElementById('root'));
registerServiceWorker();
