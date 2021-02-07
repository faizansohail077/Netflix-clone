import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Screens/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './Screens/ProfileScreen';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
        console.log(userAuth)
      } else {
        dispatch(logout())
      }
    })
    return unSubscribe
  }, [dispatch])
  return (
    <div className="app">

      <Router>
        <Switch>
          <Route path='/profile'><ProfileScreen /></Route>
          {
            !user ? <Login /> : (

              <Route path='/'>
                <HomeScreen />
              </Route>
            )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
