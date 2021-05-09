import { Button, TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    width: 100%;

`;

export const AddTask = () => {
    return (
        <Form>
            <TextField
                style={{ width : '70%' }}
                placeholder="todo"
                variant="outlined"
            />
            <Button
                style={{ padding : '0 2rem' }}
                variant="contained"
                color="primary"
            >Add</Button>
        </Form>
    )
}
