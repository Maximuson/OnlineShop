import React from 'react';
import s from './WindowBuy.module.css';
import { NavLink } from 'react-router-dom';
import emailjs from 'emailjs-com';




const WindowBuy = (props) => {

    
let emailInput = React.createRef();


function sendMail(){
    window.emailjs.init("user_TJKDzGOqEdecrVQLLSSt8");
      let service_id = 'gmail';
      let template_id = 'template_l3fTfWGL';
      let template_params = {
         name: 'Дорогой покупатель',
         to: `${emailInput.current.value}`,
         phone: `${props.phone[0].phone.brand} ${props.phone[0].phone.model}`,
         price: `${props.phone[0].phone.price}`
      };
      window.emailjs.send(service_id,template_id,template_params).then(()=>{
          alert('Ваш заказ отправлен')
      });
}
    return (
        <div className={s.wrapper}>
            <div className={s.form}>

                <div className={s.menutop}>
                
                <NavLink className={s.close} to="/phones" >
                    <strong >+</strong>
                </NavLink>
                </div>

                <div className={s.photoContainer}>
                    <img className={s.photo} src={props.phone[0].phone.img} alt="" />
                </div>
                <div className={s.phoneAndPrice}>
                    <strong className={s.phoneName}>{`${props.phone[0].phone.brand} ${props.phone[0].phone.model}`}</strong>
                    <strong className={s.price}>{props.phone[0].phone.price}</strong>
                </div>
                <div className={s.formOffer}>
                    <input placeholder='yourmail@example' ref={emailInput} className={s.mail} type="email" name="" id="email"/>
                    <button className={s.btnBuy} onClick={sendMail} >Buy</button>
                </div>

            </div>
        </div>
    )
}

export default WindowBuy;