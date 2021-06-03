import {useState, useEffect} from 'react';
import { getAuthorizedUser } from '../api';

export const useUserFinder = () => {

    const [user, setUser] = useState({
        isLoading : true,
        error : false,
        user : {
            logged : false
        }
    });

    useEffect(() => {
        getAuthorizedUser()
        .then(response => {
            
            setUser({
                isLoading : false,
                error : false,
                user : {
                    ...response.data,
                    logged : true
                }
            });

        })
        .catch(() => {

            setUser({
                isLoading : false,
                error : true,
                user : {
                    logged : false
                }
            });
        });
    }, []);

    return {
        ...user,
        setUser
    };
}