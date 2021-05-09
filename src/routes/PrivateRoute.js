import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({
    isLogged,
    component : Component,
    redirectRoute,
    ...routeProps

}) => {
    return (
        (isLogged) ? 
            <Route {...routeProps} component={ (props) => <Component {...props} />} /> 
            :
            <Redirect to={redirectRoute} />
    )
}
