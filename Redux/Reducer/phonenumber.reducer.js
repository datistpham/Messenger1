import { getPhoneNumber1 } from "../Constant";

const isphonenumber1= (state="", action)=> {
    switch(action.type) {
        case getPhoneNumber1:
            return state= action.payload
        default:
            return state
    }
}
export default isphonenumber1