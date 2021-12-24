const surName= (state="", action)=> {
    switch(action.type) {
        case "getSurName":
            return state= action.payload
        default:
            return state
    }
}
export default surName