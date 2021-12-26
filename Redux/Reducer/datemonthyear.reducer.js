import { getDate1, getMonth1, getYear1 } from "../Constant"

export const isDate1= (state="", action)=> {
    switch (action.type) {
        case getDate1:
            return state= action.payload
        default: 
            return state
    }
}
export const isMonth1= (state="", action)=> {
    switch (action.type) {
        case getMonth1:
            return state= action.payload
        default: 
            return state
    }
}
export const isYear1= (state="", action)=> {
    switch (action.type) {
        case getYear1: 
            return state= action.payload
        default: 
            return state
    }
}


