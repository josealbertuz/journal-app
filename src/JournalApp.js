import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRouter } from './routes/AppRouter'
import { AuthContext } from './contexts/AuthContext';
import { Center, ChakraProvider, CircularProgress } from '@chakra-ui/react';
import { useUserFinder } from './hooks/useUserFinder';

const queryClient = new QueryClient();


export const JournalApp = () => {

    const { isLoading, user, setUser } = useUserFinder();

    return (isLoading) ? (<Center>
        <CircularProgress isIndeterminate />
    </Center>) : (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={{
                user,
                setUser
            }}>
                <ChakraProvider>
                    <AppRouter />
                </ChakraProvider>
            </AuthContext.Provider>
        </QueryClientProvider>
    );
}
