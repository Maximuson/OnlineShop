import React from 'react';
import {  Route} from "react-router-dom";
import s from './PhonesList.module.css';
import Phone from './Phone/Phone';
import WindowBuy from './Phone/WindowBuy/WindowBuy';

const PhonesList = (props) =>{
    let items = props.phones.map((i)=>{
        return <Phone phone={i} />
    } )

    return(
        <div className={s.wrapper}>
            {items}
            <Route path="/phones/buy" render={()=>(
                <WindowBuy phone={props.state.buy}/>
            )} />
           
        </div>
    )
}

export default PhonesList;