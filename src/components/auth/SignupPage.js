import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Button, CircularProgress, Paper, Snackbar, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { signupSchema } from '../../validators/signup-validator';
import { AuthContext } from '../../contexts/AuthContext';
import { signup } from '../../api';
import { AuthTypes } from '../../types/AuthTypes';

const SignupContainer = styled(Paper)`
    display: flex;
    flex-direction: column;
    padding: 15%;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`;

const StyledLink = styled(Link)`
    text-align: center;
    margin-top: 10%;
    text-decoration: none;
    color: black;

    &:hover{
        text-decoration: underline;
    }
`;

export const SignupPage = () => {

    const history = useHistory();

    const { dispatch } = useContext(AuthContext);

    const [snackBar, setSnackBar] = useState({
        open : false,
        message : ''
    });

    const closeSnackBar = () => {
        setSnackBar({
            open : false,
            message : ''
        })
    } 

    const handleSignup = ({email, username, password}, formikBag) => {

        signup(email, username, password)
            .then((response) => {

                dispatch({
                    type : AuthTypes.login,
                    payload : response.data
                });

                history.replace('/');


            })
            .catch(() => {

                setSnackBar({
                    open : true,
                    message : 'That user already exist'
                })

            })

    }

    const {values, handleSubmit, handleChange, errors, isValid, isSubmitting} = useFormik({
        initialValues : {
            email : '',
            username : '',
            password : ''
        },
        onSubmit : handleSignup,
        validationSchema : signupSchema
    })

    return (
        <form
            onSubmit={ handleSubmit }
        >
            <SignupContainer>
                <Title>Signup</Title>
                <TextField
                    name="email"
                    onChange={ handleChange }
                    label="email"
                    margin="normal"
                    fullWidth
                    value={ values.email }
                    helperText={ errors.email }
                    error={ false }
                />
                <TextField
                    name="username"
                    onChange={ handleChange }
                    label="username"
                    margin="normal"
                    fullWidth
                    value={ values.username }
                    helperText={ errors.username }
                    error={ false }
                />
                <TextField
                    type="password"
                    name="password"
                    onChange={ handleChange }
                    label="password"
                    margin="normal"
                    fullWidth
                    value={ values.password }
                    helperText={ errors.password }
                    error={ false }
                />
                <Button
                    color="primary"
                    disabled={ !isValid || (values.email === '' || values.username === '' || values.password === '') }
                    type="submit"
                    style={{ margin : "10%" }}
                    variant="contained"
                >{
                    (isSubmitting) ? <CircularProgress /> : 'Sign up'
                }</Button>
                <StyledLink
                    to="/auth/login"
                >Already registered?</StyledLink>
                <Snackbar
                    open={snackBar.open}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    autoHideDuration={6000}
                    message={<span>{snackBar.message}</span>}
                    onClose={closeSnackBar}
                />
        </SignupContainer>
    </form>
    )
}
