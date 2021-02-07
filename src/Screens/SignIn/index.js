import React, { useRef } from 'react'
import { auth } from '../../firebase'
import './style.css'
const SignIn = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                    console.log('aaaaaaaaa',authUser)
            }).catch(err => {
                alert(err.message)
            })
    }
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((authUser)=>{
            console.log(authUser,'signin')
        }).catch((err)=>{
            alert(err.message)
        })

    }
    return (
        <div className="signin">
            <form >
                <h1>SignIn</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                {/* <input type="text" required/> */}
                <button type="submit" onClick={signIn}>Sign In</button>

                <h5 style={{ paddingTop: '10px' }}>

                    New to Netflix? <span className="signUp" onClick={register}>Sign Up now</span>
                </h5>
            </form>
        </div>
    )
}

export default SignIn
