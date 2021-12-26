import { getFirstName1, getSurName1 } from "../Constant"

const getFirstName= (userObj)=> {
    return {
        type: getFirstName1,
        payload: userObj
    }
}
const getSurName= (userObj)=> {
    return {
        type: getSurName1,
        payload: userObj
    }
}

const getName= {
    getFirstName,
    getSurName
}

export default getName