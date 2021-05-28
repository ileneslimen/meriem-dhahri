import { DECREMENT, DELETEITEM, FAVORIS, INCREMENT, SUBMIT, TOTAL } from "./constants"

export const submite=(newuser)=>{
    return  {
        type: SUBMIT,
        payload:newuser
    }
}
export const increment=(i)=>{
    return  {
        type: INCREMENT,
        payload:i
    }
}
export const decrement=()=>{
    return  {
        type: DECREMENT,
       
    }
}
export const favoris=()=>{
    return  {
        type: FAVORIS,
     
    }
}
export const deleteitem=(i)=>{
    return  {
        type: DELETEITEM,
     payload:i
    }
}
export const total=(i)=>{
    return  {
        type: TOTAL,
     payload:i
    }
}