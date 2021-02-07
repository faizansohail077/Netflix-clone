import React from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import { selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase'

function ProfileScreen() {
    const user = useSelector(selectUser)
    const signout = (e) => {
        e.preventDefault()
        auth.signOut()
    }
    return (
        <div className="profilescreen">
            <Navbar />
            <div className="profilescreen__body">
                <h1>Edit Profile</h1>
                <div className="profilescreen__info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
                    <div className="profilescreen__details">
                        <h2>{user?.email}</h2>
                        <div className="profilescreen__plans">
                            <h3>Plans</h3>
                            <p></p>
                            <button className="profilescreen__signout" onClick={signout}>SignOut</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
