import React from 'react'
import { Redirect, Route } from 'react-router'


export const PublicRoute = ({
    isLogged,
    component : Component,
    redirectRoute,
    ...routeProps
}) => {
    return (
        (isLogged) ?
            <Redirect to={redirectRoute} /> :
            <Route {...routeProps} component={ (props) => <Component {...props} /> } />
    )
}
