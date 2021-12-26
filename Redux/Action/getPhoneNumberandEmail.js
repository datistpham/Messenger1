import { getEmail1, getPhoneNumber1 } from "../Constant"

const getPhoneNumber= (userObj)=> {
    return {
        type: getPhoneNumber1,
        payload: userObj
    }
}
export const getEmail= (userObj)=> {
    return {
        type: getEmail1,
        payload: userObj
    }
}
export default getPhoneNumber