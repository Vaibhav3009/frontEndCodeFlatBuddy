
import { IS_LOGIN } from "../actions/types";
const initialState= {loggedIn:false}


const loggedUser = (state = initialState, action) =>{
    const {payload, type } = action;
    switch(type){
      case(IS_LOGIN):{
         
        console.log(payload)
        return {loggedIn:payload}
      }
      
     default:
        return state;
    }
  }
  
  export default loggedUser;