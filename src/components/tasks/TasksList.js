import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useMutation, useQueryClient } from 'react-query';
import { deleteTask, editTask } from '../../api';
import React from 'react';

export const TasksList = ({tasks = []}) => {

    const queryClient = useQueryClient();

    const editTaskMutation = useMutation((task) => editTask(task), {
        onSuccess : () => {
            queryClient.invalidateQueries('getAllTasks');
        }
    });

    const deleteTaskMutation = useMutation((taskId) => deleteTask(taskId), {
        onSuccess : () => {
            queryClient.invalidateQueries('getAllTasks');
        }
    });


    const handleTaskClick = (index) => {
        tasks[index].completed = !tasks[index].completed;
        editTaskMutation.mutate(tasks[index]);

    }

    const handleTaskDelete = (index) => {
        deleteTaskMutation.mutate(tasks[index].id);
    }

    return (
        <List
            style={{ width : '100%', overflowY : 'auto'}}
        >
            {
                tasks.map((task, index) => {
                    return (
                        <ListItem
                            style={{ textDecoration : (task.completed) ? 'line-through' : 'none'}}
                            key={index} 
                            button
                            onClick={() => handleTaskClick(index)}
                            >
                            <ListItemText children={task.description} />
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
