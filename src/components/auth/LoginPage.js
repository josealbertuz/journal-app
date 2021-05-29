import { Button, CircularProgress, Paper, Snackbar, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useFormik } from 'formik';
import { loginSchema } from '../../validators/login-validator';
import { AuthContext } from '../../contexts/AuthContext';
import { AuthTypes } from '../../types/AuthTypes';
import { googleSignIn, login } from '../../api';


const LoginContainer = styled(Paper)`
    display: flex;
    flex-direction: column;
    padding: 15%;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`;

const Divider = styled.hr`
    width: 100%;
    margin-top: 15%;
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



export const LoginPage = () => {

    const history = useHistory();

    const [snackBar, setSnackBar] = useState({
        open: false,
        message: ''
    });

    const closeSnackBar = () => {
        setSnackBar({
            open : false,
            message : ''
        })
    } 

    const { dispatch } = useContext(AuthContext);

    const handleGoogleLogin = ({tokenId}) => {

        googleSignIn(tokenId)
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
                    message : 'That user does not exists'
                })
            });

    }

    const handleLogin = ({ email, password }, formikBag) => {

        login(email, password)
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
                    message : 'That user does not exists'
                })
                formikBag.setSubmitting(false);
            });

    }

    const { handleSubmit, errors, values, isValid, handleChange, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: handleLogin,
        validationSchema: loginSchema
    });

    return (
        <form
            onSubmit={handleSubmit}
        >
            <LoginContainer>
                <Title>Login</Title>
                <GoogleLogin
                    clientId="880364752868-8b5q837v7cm7h7d75cfkg3dblg9aiuue.apps.googleusercontent.com"
                    onSuccess={handleGoogleLogin}
                    onFailure={handleGoogleLogin}
                />
                <Divider />
                <TextField
                    name="email"
                    label="email"
                    error={errors.email}
                    value={values.email}
                    helperText={errors.email}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    type="password"
                    name="password"
                    label="password"
                    value={values.password}
                    error={errors.password}
                    helperText={errors.password}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                />
                <Button
                    disabled={!isValid || (values.email === '' || values.password === '')}
                    style={{ margin: '10%' }}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    {
                        (isSubmitting) ? <CircularProgress /> : 'Log in'
                    }
                </Button>
                <StyledLink
                    to="/auth/signup"
                >Have no account?</StyledLink>
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
            </LoginContainer>
        </form>
    )
}
