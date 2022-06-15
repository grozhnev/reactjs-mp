import React, {Component} from "react";
import ContactCard from './components/ContactCard';
import PureComp from './components/PureComp';
import ReactComp from './components/ReactComp';

function App() {
    return (
        <div className="contact">
            <ContactCard 
                contact={{name:"Sasha", imgUrl:"http://google.com", phone:"8-800-100-00-00", email:"mymail@mail.my"}} 
            />

            <ContactCard 
                contact={{name:"Petya", imgUrl:"http://yahoo.com", phone:"1-555-888-01-01", email:"top@x.com"}} 
            />

          <PureComp />

          <ReactComp />

        </div>
    )
}


export default App;
