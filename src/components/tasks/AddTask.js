import { Button, CircularProgress, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { addTask } from '../../api';

const Form = styled.form`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const AddTask = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation((description) => addTask(description), {
        onSuccess : () => {
            queryClient.invalidateQueries('getAllTasks')
        }
    });

    const handleSubmit = ({description}, formikBag) => {
        mutation.mutate(description);
        formikBag.resetForm();
    }

    return (
        <Formik
            initialValues={{
                description : ''
            }}
            onSubmit={ handleSubmit }
        >
            {
                (props) => (
                    <Form
                        onSubmit={ props.handleSubmit }
                    >
                        <TextField
                            disabled={ mutation.isLoading }
                            name="description"
                            onChange={ props.handleChange }
                            style={{ width: '70%' }}
                            placeholder="todo"
                            variant="outlined"
                        />
                        <Button
                            children={ mutation.isLoading ? (<CircularProgress />) : 'Add' }
                            disabled={ props.values.description === '' }
                            type="submit"
                            style={{ padding: '0 2rem' }}
                            variant="contained"
                            color="primary"
                        />
                    </Form>
                )
            }
        </Formik>
    )
}
