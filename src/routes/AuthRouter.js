import React from 'react'
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router'
import { LoginPage } from '../components/auth/LoginPage';
import { SignupPage } from '../components/auth/SignupPage';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url("https://www.criandocomapego.com/wp-content/uploads/2018/07/folha-quadriculada-para-imprimir-1.jpg");
    background-position: center;
`;

const Container = styled.div`
    width: ${({ isSmall }) => isSmall ? '40%' : '75%'}
`;

export const AuthRouter = () => {

    const isSmall = useMediaQuery('(min-width:800px)');

    return (
        <Row>
            <Container isSmall={ isSmall }>
                <Switch>

                    <Route exact path="/auth/login" component={LoginPage} />

                    <Route exact path="/auth/signup" component={SignupPage} />

                    <Redirect to="/auth/login" />

                </Switch>
            </Container>
        </Row>
    )
}
