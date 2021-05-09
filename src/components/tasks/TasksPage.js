import React from 'react';
import styled from 'styled-components';
import { AddTask } from './AddTask';
import { Divider } from '../ui/Divider';
import { TasksList } from './TasksList';


const Wrapper = styled.div`
    padding: 1.5rem;
    height: 100%;
    margin: 0 auto;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TasksPage = () => {
    return (
        <Wrapper>
            <AddTask />
            <Divider />
            <TasksList />
        </Wrapper>
    )
}
