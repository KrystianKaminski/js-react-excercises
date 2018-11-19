import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log('This component is a function!', App)
console.log('Component when invoked returns a part of VDOM',App())
console.log('This returns a part of VDOM with this component', <App />)

ReactDOM.render(<App />, document.getElementById('root'));
