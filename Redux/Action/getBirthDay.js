import { getDate1, getMonth1, getYear1 } from "../Constant"
const getDate= (userObj)=> {
    return {
        type: getDate1,
        payload: userObj
    }
}
const getMonth= (userObj)=> {
    return {
        type: getMonth1,
        payload: userObj
    }
}
const getYear= (userObj)=> {
    return {
        type: getYear1,
        payload: userObj
    }
}

const getBirthDay= {
    getDate,
    getMonth,
    getYear
}

export default getBirthDay
