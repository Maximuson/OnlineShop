import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import PhonesList from './components/PhonesList/PhonesList';

const App =  (props) => {
    return (
      <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="main">
        <Route path="/phones" render={ ()=>(
          <PhonesList state={props.state} phones={props.state.phones}/>
        )}/>
        </div>
      </div>
      </BrowserRouter>
    );

}

export default App;

