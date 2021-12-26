import { getPhoneNumber1, getEmail1 } from "../Constant";


const isphonenumber1= (state="", action)=> {
    switch(action.type) {
        case getPhoneNumber1:
            return state= action.payload
        default:
            return state
    }
}
export const isemail1= (state="", action)=> {
    switch(action.type) {
        case getEmail1: 
            return state= action.payload
        default:
            return state
    }
}
export default isphonenumber1