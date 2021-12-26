import { getPhoneNumber1 } from "../Constant"

const getPhoneNumber= (userObj)=> {
    return {
        type: getPhoneNumber1,
        payload: userObj
    }
}
export default getPhoneNumber