/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ConduiitProvider } from './context';

import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
    <ConduiitProvider>
        <App />
    </ConduiitProvider>, document.getElementById('root'));

serviceWorker.unregister();
