
import { ON_GET_RESULT } from "../actions/types";
const initialState= []


const ResultReducer = (state = initialState, action) =>{
    const {payload, type } = action;
    switch(type){
      case(ON_GET_RESULT):{
         
        console.log(payload)
        const {data} = payload;
        return [...data];
      }
      
     default:
        return state;
    }
  }
  
  export default ResultReducer;