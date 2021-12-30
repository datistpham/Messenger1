import { getGoogleAccount1 } from "../Constant"

export const getAccountGoogle= (userObj)=> {
    return {
        type: getGoogleAccount1,
        payload: userObj
    }
}