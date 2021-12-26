import { combineReducers } from "redux"
import firstName from "./firstname.reducer"
import surName from "./surname.reducer"
import { isDate1, isMonth1, isYear1 } from "./datemonthyear.reducer"
import isphonenumber1, {isemail1} from "./phonenumberandEmail.reducer"
import isGender1 from "./gender.reducer"
import isPassword1 from "./password"
const rootReducer= combineReducers({
    firstName,
    surName,
    isDate1,
    isMonth1,
    isYear1,
    isphonenumber1,
    isGender1,
    isPassword1,
    isemail1
})

export default rootReducer