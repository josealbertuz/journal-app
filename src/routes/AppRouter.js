import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { DashboardRouter } from './DashboardRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../contexts/AuthContext';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>

            <Switch>

                <PublicRoute path="/auth" component={ AuthRouter } redirectRoute="/" isLogged={user.logged} />

                <PrivateRoute path="/" component={ DashboardRouter } redirectRoute="/auth" isLogged={user.logged} />

            </Switch>

        </Router>
    )
}
