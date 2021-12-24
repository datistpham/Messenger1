const firstName= (state= "", action)=> {
    switch(action.type) {
        case "getFirstName":
            return state= action.payload
        default: 
            return state
    }
}
export default firstName