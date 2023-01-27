

import classes from './card.module.css'
import {useState} from 'react'
import flipkart_logo from './flipkart_logo.jpeg'
import close_icon from './close_icon.png'

function Card (props){

    const [username , setUsername]= useState("")
    // eslint-disable-next-line no-restricted-globals
    //var closeCard = document.getElementsByClassName(close)

    function inputHandler(event)
    {
        console.log(event.target.value)
        setUsername(event.target.value)
    }
    function buttonHandler()
    {
        props.props.toggleFlag(1)
        console.log(username)
        setUsername("")
    }
   /* function closeCard()
    {
        closeCard.classList.remove(closecard)
    }*/





    return(
        <div className={classes.card}>
        <div className={classes.bigcard}>   
            <div className={classes.left}>
                <div className={classes.top}>
                    <h2 className={classes.heading}>Login</h2>
                    <p className={classes.desc}>
                        Get access to your Orders, Wishlist and Recommendations
                    </p>
                </div>
                <div className={classes.bottom}>
                    <img src={flipkart_logo} alt=""/>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.right_top}>
                    <input className={classes.input}type ="text" placeholder="Enter Email/Mobile number" name="input" onChange={inputHandler} value={username}/>
                    <p className={classes.para}>By continuing, you agree to Flipkart's <a href="#!">Terms of Use </a> and <a href="#!">Privacy Policy</a>. </p><br/> 
                    <button className={classes.button} type="submit" onClick={buttonHandler}> Request OTP</button>
                </div>
                    <div className={classes.right_bottom}>
                        <a href="#!"> New to Flipkart? Create an account</a>
                    </div>
            </div>
        </div>
        <div className={classes.close} {...classes.closecard}>
             <img src={close_icon} alt="" />
        </div>
        </div> 
    )
}


export default Card;