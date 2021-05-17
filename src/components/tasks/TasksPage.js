import { CircularProgress } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { useTasks } from '../../hooks/useTasks';
import { AddTask } from './AddTask';
import { TasksList } from './TasksList';



const Wrapper = styled.div`
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TasksPage = () => {

    const { isLoading, data : tasks } = useTasks();

    return (
        (isLoading) ? (
            <Wrapper>
                <CircularProgress />
            </Wrapper>
        ) : (
            <Wrapper>
                <AddTask />
                <TasksList tasks={tasks} />
            </Wrapper>
        )
    )
}
