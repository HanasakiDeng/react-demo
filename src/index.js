import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './Main'
import React from 'react'
import utils from './common/utils'

ReactDOM.render(<Main/>, document.getElementById('root'));
registerServiceWorker();
