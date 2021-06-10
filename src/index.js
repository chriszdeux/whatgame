import React from 'react';
import ReactDOM from 'react-dom';
import { WhatGameApp } from './WhatGameApp';


import '../src/styles/global-styles.css';
import '../src/styles/buttons-styles/buttons-styles.css';
import '../src/styles/loading-style.css'

import { LoadingComponent } from './components/loading/LoadingComponent';
import { LoadingSmallCards } from './components/loading/LoadingSmallCards';


ReactDOM.render(<WhatGameApp />, document.querySelector('#root'));