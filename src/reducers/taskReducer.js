import {TaskTypes} from '../types/TaskTypes';


export const taskReducer = (state = [] , action = {}) => {

    switch (action?.type) {
        case TaskTypes.add:

            return [
                ...state,
                action.payload
            ];
            
        case TaskTypes.complete:

            state[action.payload] = !state[action.payload].completed;

            return [
                ...state
            ];

        case TaskTypes.delete:
            
            state.splice(action.payload, 1);

            return [
                ...state
            ];

        default:
            return state;
    }



}