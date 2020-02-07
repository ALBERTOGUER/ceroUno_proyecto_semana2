import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let button = document.getElementById('button');
let flag= false;
event()
function event(){
    button.addEventListener('click', try_function);
}
function try_function(){
    flag=true;
  if(flag == true ){
  document.getElementById('texto').innerText= 'SUSCRITO'
}
}