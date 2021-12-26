import { getPassword1 } from "../Constant"

const getPassword= (numberObj)=> {
    return {
        type: getPassword1,
        payload: numberObj
    }
}
export default getPassword