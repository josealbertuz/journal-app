import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

export const login = (email, password) => {
    return axios.post(
        '/auth/login',
        {
            email,
            password
        }
    );
}

export const signup = (email, username, password) => {
    return axios.post(
        '/auth/signup',
        {
            email,
            username,
            password
        }
    );
}

export const googleSignIn = (id_token) => {

    return axios.post(
        '/auth/google',
        {
            id_token
        }
    )

}

export const getAuthorizedUser = () => {

    return axios.get(
        '/auth/get-authorized-user'
    );

}

export const logout = () => {

    return axios.get(
        '/auth/logout'
    );

}

export const addTask = (description) => {

    return axios.post(
        '/task',
        {
            description
        }
    );

}

export const getAllTasks = () => {

    return axios.get(
        '/task'
    );

}

export const editTask = ({ id, ...task }) => {

    return axios.put(
        `/task/${id}`,
        {
            task
        }
    );

}

export const deleteTask = (taskId) => {


    return axios.delete(
        `/task/${taskId}`
    );

}

export const addNote = () => {

    return axios.post(
        '/note'
    );

}

export const getNoteById = (noteId) => {

    return axios.get(
        `/note/${noteId}`
    );

}

export const getAllNotes = () => {
    return axios.get(
        '/note'
    );
}

export const editNote = ({ noteId, title, body }) => {

    return axios.put(
        `/note/${noteId}`,
        {
            title,
            body
        }
    );

}

export const deleteNote = (noteId) => {

    return axios.delete(
        `/note/${noteId}`
    );

}

export const uploadImage = ({ noteId, formData }) => {

    return axios.post(
        `/uploads/${noteId}`,
        formData
    );

}

export const deleteImage = (image) => {

    return axios.delete(
        `/uploads/${image}`
    );

}