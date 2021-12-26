import { getGender1 } from "../Constant";

const isGender1= (state="", action)=> {
    switch(action.type) {
        case getGender1:
            return state= action.payload
        default: 
            return state
    }
}

export default isGender1