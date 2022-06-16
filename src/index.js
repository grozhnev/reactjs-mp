import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import NumericList from './components/NumericList';
import HelloProps from './components/HelloProps';


ReactDOM.render(<App />, document.getElementById('app'));

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

