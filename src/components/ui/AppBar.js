import { AppBar, Icon, IconButton, Tab, Tabs, Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { AuthTypes } from '../../types/AuthTypes'

export const Appbar = () => {


    const { dispatch } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {

        dispatch({
            type: AuthTypes.logout
        });

    }

    return (
        <AppBar
            style={{ gridArea: 'appbar' }}
            position="static"
        >
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Tabs value={
                    (history.location.pathname === '/') ? false : history.location.pathname
                }>
                    <Tab
                        value="/notes"
                        label="Notes"
                        component={ Link }
                        to="/notes"
                    />
                    <Tab
                        component={ Link }
                        to="/tasks"
                        value="/tasks"
                        label="Tasks" 
                    />
                </Tabs>
                <IconButton
                    onClick={handleLogout}
                >
                    <Icon
                        style={{ color: 'white' }}
                    >account_circle</Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
