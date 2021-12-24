const getPhoneNumber= (userObj)=> {
    return {
        type: "getPhoneNumber",
        payload: userObj
    }
}
export default getPhoneNumber