import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isLogged} from '../helpers/AuthHandler'

export default ({children, ...res}) => {
    let logged = isLogged()
    let autorized = (res.private && !logged) ? false : true

    return (
        <Route
            {...res}
            render={()=>
                autorized ? children : <Redirect to="/signin" />
            }    
        />
    )
}