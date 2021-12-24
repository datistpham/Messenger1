const getDate= (userObj)=> {
    return {
        type: 'getDate',
        payload: userObj
    }
}
const getMonth= (userObj)=> {
    return {
        type: 'getMonth',
        payload: userObj
    }
}
const getYear= (userObj)=> {
    return {
        type: "getYear",
        payload: userObj
    }
}

const getBirthDay= {
    getDate,
    getMonth,
    getYear
}

export default getBirthDay
