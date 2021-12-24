import { combineReducers } from "redux"
import firstName from "./firstname.reducer"
import surName from "./surname.reducer"

const rootReducer= combineReducers({
    firstName,
    surName
})

export default rootReducer