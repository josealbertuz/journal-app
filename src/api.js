import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

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

export const addTask = (description) => {

    return axios.post(
        '/task',
        {
            description
        },
        {
            headers : {
                'x-token' : localStorage.getItem('x-token')
            }
        }
    );

}

export const getAllTasks = () => {

    return axios.get(
        '/task',
        {
            headers : {
                'x-token' : localStorage.getItem('x-token')
            }
        }
    );

}

export const editTask = ({id, ...task}) => {

    return axios.put(
        `/task/${id}`,
        {
            task
        },
        {
            headers : {
                'x-token' : localStorage.getItem('x-token')
            }
        }
    );

}

export const deleteTask = (taskId) => {


    return axios.delete(
        `/task/${taskId}`,
        {
            headers : {
                'x-token' : localStorage.getItem('x-token')
            }
        }
    );

}

export const addNote = () => {

    return axios.post(
        '/note',
        null,
        {
            headers : {
                'x-token' : localStorage.getItem('x-token')
            }
        }
    );

}

export const getNoteById = (noteId) => {

    return axios.get(
        `/note/${noteId}`,
        {
            headers : {
                'x-token' : localStorage.getItem('x-token')
            }
        }
    );

}

export const getAllNotes = () => {
    return axios.get(
        '/note', 
        {
            headers : {
                'x-token' : localStorage.getItem('x-token')
            }
        }
    );
}

export const editNote = ({ noteId, title, body }) => {

    return axios.put(
        `/note/${noteId}`,
        {
            title,
            body
        },
        {
            headers : {
                'x-token' : localStorage.getItem('x-token')
            }
        }
    );

}

export const deleteNote = (noteId) => {

    return axios.delete(
        `/note/${noteId}`,
        {
            headers : {
                'x-token' : localStorage.getItem('x-token')
            }
        }
    );

}

export const uploadImage = ({noteId, formData}) => {

    return axios.post(
        `/uploads/${noteId}`,
        formData,
        {
            headers : {
                "Content-Type": "multipart/form-data",
                'x-token' : localStorage.getItem('x-token')
            }
        }
    );

}