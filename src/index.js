import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NumericList from './components/NumericList';
import HelloProps from './components/HelloProps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))   

root.render(<h1>Hello, world 2!</h1>);


// functional
ReactDOM.render( <NumericList />, "root")

ReactDOM.render(<HelloProps />, "root")



const e = React.createElement;
root.render(e('div', null, 'Hello World'));


//React.PureComponent

