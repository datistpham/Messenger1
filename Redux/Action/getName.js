const getFirstName= (userObj)=> {
    return {
        type: "getFirstName",
        payload: userObj
    }
}
const getSurName= (userObj)=> {
    return {
        type: "getSurName",
        payload: userObj
    }
}

const getName= {
    getFirstName,
    getSurName
}

export default getName