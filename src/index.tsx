import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/index.css';

// Adding polyfills.
import 'core-js';

/** COMMENT ON THAT:
 * The reason for using explicitly imported polyfills other than use standard useBuildIns: 'usage' as babel documentation
 * suggest, is because this approach does not provide transpilation of the node_modules. However, after the IE11 has been
 * announced deprecated by the Microsoft, many libraries maintainers no longer transpile their final code to the ES5-compatible
 * version. Hence, whilst there is no way of polyfilling node-modules other than prematurely importing all the possible polyfills
 * here, we decided to stick to this approach.
 * Feel free to remove it in future if there is a better way of handling this.
 */

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);
