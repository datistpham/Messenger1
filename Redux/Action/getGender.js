import { getGender1 } from "../Constant"

const getGenderspe= (userObj)=> {
    return {
        type: getGender1,
        payload: userObj
    }
}

export default getGenderspe