import { getPassword1 } from '../Constant/index'
const isPassword1= (state= "", action)=> {
    switch(action.type) {
        case getPassword1:
            return state= action.payload
        default: 
            return state
    }
}

export default isPassword1