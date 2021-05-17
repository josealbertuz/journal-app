import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import styled from 'styled-components';
import { NotesPage } from '../components/notes/NotesPage';
import { TasksPage } from '../components/tasks/TasksPage';
import { Appbar } from '../components/ui/AppBar';

const Grid = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 8% 1fr;
    grid-template-areas:
    "appbar"
    "main"
`;

const Main = styled.main`
    grid-area: main;
`;



export const DashboardRouter = () => {


    return (
        <Grid>

                <Appbar />

                <Main>
                    <Switch>

                        <Route exact path="/notes" component={NotesPage} />

                        <Route exact path="/tasks" component={TasksPage} />

                        <Redirect to="/notes" component={NotesPage} />

                    </Switch>
                </Main>

        </Grid>
    )
}
