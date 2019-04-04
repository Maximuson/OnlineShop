import React from 'react'
import s from './Phone.module.css';
import add from '../../../imgs/add.svg'
import money from '../../../imgs/money.svg'
import { NavLink } from 'react-router-dom'
import state from '../../../redux/state';


const Phone = (props) => {

    function openForm(){
        state.buy=[]
        state.buy.push(props)
    }

    return(
        <div className={s.wrapper}>
            <strong className={s.phoneName}>
                {` ${props.phone.brand} ${props.phone.model} `} 
            </strong>
            <img className={s.photo} src={props.phone.img} alt=""/>
            <div className={s.bottomPanel}>
            <p className={s.price}>{`${props.phone.price} грн`} </p>
            <img className={s.buttonBuy} src={add}  alt=""/>
            <NavLink to="/phones/buy" onClick={openForm}>
                <img className={s.buttonBuy} src={money} alt=""/>
            </NavLink>
            </div>
            
        </div>
    )
}

export default Phone;