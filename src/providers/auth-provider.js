import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/auth';

export const login = (email, password) => {
    return axios.post(
        '/login',
        {
            email,
            password
        }
    );
}

export const signup = (email, username, password) => {
    return axios.post(
        '/signup',
        {
            email,
            username,
            password
        }
    );
}

export const googleSignIn = (id_token) => {

    return axios.post(
        '/google',
        {
            id_token
        }
    )


}



