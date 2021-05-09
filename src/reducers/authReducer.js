import { AuthTypes } from "../types/AuthTypes";

export const authReducer = (state = {}, action = {}) => {

    switch(action?.type){

        case AuthTypes.login:
            return {
                ...action.payload,
                logged : true
            }

        case AuthTypes.logout:
            return {
                logged : false
            }

        default: 
            return state;
    }

}