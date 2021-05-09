import React, { useReducer } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components'
import { AppRouter } from './routes/AppRouter'
import { styledComponentsTheme } from './themes/styled-components-theme';
import { authReducer } from './reducers/authReducer';
import { AuthContext } from './contexts/AuthContext';

const queryClient = new QueryClient();

const init = () => ({logged : false })

export const JournalApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    return (
        <QueryClientProvider client={ queryClient }>
            <AuthContext.Provider value={{
                user,
                dispatch
            }}>
                <ThemeProvider theme={styledComponentsTheme}>
                    <AppRouter />
                </ThemeProvider>
            </AuthContext.Provider>
        </QueryClientProvider>
    );
}
