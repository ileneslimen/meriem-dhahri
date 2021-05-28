
import { DECREMENT, DELETEITEM, FAVORIS, INCREMENT, SUBMIT, TOTAL } from "./constants";

  
  const initialstate = {
   user: {id:0,auth:false},
   info: [],
   count:1,
   toggle:false,
   item:{price:60,id:Date.now()},
   totalprice:'0'

  };
  export const reducer = (state = initialstate, action) => {
    switch (action.type) {
    
      case INCREMENT:
        return { ...state, count: state.count+1 };
      case DECREMENT:
        return { ...state, count: state.count > 1 ? state.count - 1 : 1};
      case SUBMIT: 
      return {
        ...state,
       info: [
          ...state.info,
          action.payload
        ],
        user: {...state.user, auth:!state.user.auth}
      };
     case FAVORIS: 
     return {...state,
    toggle:!state.toggle}
  

     

      default:
        return state;
  };}
  