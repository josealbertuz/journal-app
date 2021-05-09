import { faStickyNote, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const BottomAppBar = () => {

    const [value, setValue] = useState('/notes');

    const history = useHistory();

    const handleChange = (event, newValue) => {
    
        setValue(newValue);

        history.push(newValue);

    }

    return (
        <BottomNavigation
            style={{ gridArea : 'bottombar', justifyContent : 'space-evenly' }}
            showLabels
            value={ value }
            onChange={ handleChange }
        >

            <BottomNavigationAction 
                label="Notes" 
                icon={ <FontAwesomeIcon icon={ faStickyNote } />}
                value="/notes"
            />
            <BottomNavigationAction 
                label="Tasks" 
                icon={ <FontAwesomeIcon icon={ faTasks } />}
                value="/tasks"
            />

        </BottomNavigation>
    )
}
