import React, { useState } from 'react'
import SignIn from '../SignIn'
import './style.css'


const Login = () => {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className="loginScreen_logo" src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c529.png" alt="" />
                <button onClick={() => setSignIn(true)} className="loginScreen__button" >Sign In</button>

                <div className="loginScreen__gradiant" />
            </div>
            <div className="loginScreen__body">
                {signIn ? <SignIn /> : (
                    <>
                        <h1>Unlimited films,TV programs and More</h1>
                        <h2>Watch anywhere ,cancel at any time</h2>
                        <h3>Ready To watch?Enter email or create Account</h3>
                        <div className="loginScreen__input">
                            <form>
                                <input type="text" placeholder="Enter Email Address" />
                                <button onClick={() => setSignIn(true)} className="loginScreen__getStarted">get Started</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>

    )
}

export default Login
