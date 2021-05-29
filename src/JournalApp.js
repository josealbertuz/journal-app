import React, { useReducer } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRouter } from './routes/AppRouter'
import { authReducer } from './reducers/authReducer';
import { AuthContext } from './contexts/AuthContext';
import { ChakraProvider } from '@chakra-ui/react';

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
                <ChakraProvider>
                    <AppRouter />
                </ChakraProvider>
            </AuthContext.Provider>
        </QueryClientProvider>
    );
}
