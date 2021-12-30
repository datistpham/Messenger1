import { getGoogleAccount1 } from "../Constant";

const googleaccount= (state="", action)=> {
    switch(action.type) {
        case getGoogleAccount1:
            return state= action.payload
        default:
            return state
    }
}

export default googleaccount