import React from 'react'
import {Switch} from 'react-router-dom'
import Routhandler from './components/Routhandler'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AdPage from './pages/AdPage'
import AddAd from './pages/AddAd'

export default () =>{
    return(
        <Switch>
            <Routhandler exact path="/">
                <Home/>
            </Routhandler>

            <Routhandler exact path="/about">
                <About/>
            </Routhandler>

            <Routhandler exact path="/signin">
                <SignIn/>
            </Routhandler>

            <Routhandler exact path="/signup">
                <SignUp/>
            </Routhandler>

            <Routhandler exact path="/ad/:id">
                <AdPage/>
            </Routhandler>

            <Routhandler private exact path="/post-an-ad">
                <AddAd/>
            </Routhandler>
            
            <Routhandler>
                <NotFound/>
            </Routhandler>
        </Switch>
    )
}