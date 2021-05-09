import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { useState } from 'react';

const tasksFixtures = [
    {
        title : 'buy bread',
        done : false
    },
    {
        title : 'go to the gym',
        done : false
    },
    {
        title : 'finish the project',
        done : false
    }
];


export const TasksList = () => {

    const [tasks, setTasks] = useState(tasksFixtures);

    const handleTaskClick = (index) => {
        tasks[index].done = !tasks[index].done;
        setTasks([
            ...tasks
        ]);
    }

    const handleTaskDelete = (index) => {
        tasks.splice(index, 1);
        setTasks([
            ...tasks
        ])
    }

    return (
        <List
            style={{ width : '100%', overflowY : 'auto' }}
        >
            {
                tasks.map((task, index) => {
                    return (
                        <ListItem
                            style={{ textDecoration : (task.done) ? 'line-through' : 'none'}}
                            key={index} 
                            button
                            onClick={() => handleTaskClick(index)}
                            >
                            <ListItemText children={task.title} />
                            <ListItemSecondaryAction
                                onClick={ () => handleTaskDelete(index) }
                                children={
                                    <IconButton
                                        children={<Delete />}
                                    />
                                }
                            />
                        </ListItem>
                    )
                })
            }
        </List>
    )
}
