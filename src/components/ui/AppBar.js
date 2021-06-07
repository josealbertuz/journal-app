import React, { useContext } from 'react';
import { AppBar, Icon, IconButton, Tab, Tabs, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useQueryClient } from 'react-query';
import { logout } from '../../api';

export const Appbar = () => {

    const { setUser } = useContext(AuthContext);

    const history = useHistory();

    const queryClient = useQueryClient();

    const handleLogout = () => {

        logout().then(() => {

            setUser({
                user : {
                    logged : false
                }
            });
    
            queryClient.invalidateQueries();
        });
        
    }

    return (
        <AppBar
            style={{ gridArea: 'appbar' }}
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
                    >logout</Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
