import { AppBar, Icon, IconButton, Toolbar, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { AuthTypes } from '../../types/AuthTypes'

export const Appbar = () => {

    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {

        dispatch({
            type : AuthTypes.logout
        });

    }


    return (
        <AppBar
            style={{ gridArea : 'appbar' }}
            position="static"
        >
            <Toolbar style={{ justifyContent : 'space-between' }}>
                <Typography variant="h6">
                    Journal app
                </Typography>
                <IconButton
                    onClick={ handleLogout }
                >
                    <Icon
                        style={{ color : 'white' }}
                    >account_circle</Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
