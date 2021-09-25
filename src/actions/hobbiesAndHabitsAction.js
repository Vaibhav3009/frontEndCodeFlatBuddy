import { ON_HABITS_CHANGE,  
  ON_BUDGET_CHANGE, 
  ON_LOCATION_CHANGE, 
  ON_HOBBIES_CHANGE,
  ON_SUBMIT,
  ON_USER_LOGIN,
  ON_GET_RESULT,
  IS_LOGIN
 } from "./types";
import axios from "../utils/axios";

export const onHabitsChange = (newHabits) =>{
  return {
    type:ON_HABITS_CHANGE,
    payload:newHabits
  };
};
export const onHobbiesChange = (newHobbies) =>{
  return {
    type:ON_HOBBIES_CHANGE,
    payload:newHobbies
  }
};
export const loggedInUser = initialState =>async dispatch=> {
  console.log(initialState)
 dispatch ({
     type:ON_USER_LOGIN,
     payload:initialState
 }
 )
}
export const onLocationChange = (address) => {
  return {
    type: ON_LOCATION_CHANGE,
    payload: address
  };
};
export const onBudgetChange = (payload) =>async dispatch=> {
  
  const {budgetObject,isOnResult} = payload

  dispatch({
    type: ON_BUDGET_CHANGE,
    payload: budgetObject
  });
};

export const getResults = dataset  => async dispatch => {
  
  console.log("enter",dataset)
    fetch(`https://hackathon-flatbuddy.herokuapp.com/users/${dataset.id}/result`)
    .then(response => response.json())
    .then( data =>  {
      console.log(data)
      dispatch( {
    type:ON_GET_RESULT,
    payload:data
  })
    
  }).catch((error)=>{
  console.log(error)
    })
  }

  export const getResultsUpdate = payload => async dispatch => {
  
    console.log("enter")
      fetch(`https://hackathon-flatbuddy.herokuapp.com/users/${payload.id}/result?budgetMin=${payload.state.budgetMin}&budgetMax=${payload.state.budgetMax}&location=${payload.state.location}`)
      .then(response => response.json())
      .then( data =>  {
        console.log(data)
        dispatch( {
      type:ON_GET_RESULT,
      payload:data
    })
      
    }).catch((error)=>{
    
      })
    }

    
    export const onSubmit = payload => async dispatch=>{
      console.log("inOnSubmit",payload)
 
      const requestOptions = {
           
        method:"POST",
        headers:{'Content-Type':'application/json','Access-Control-Allow-Origin': 'http://localhost:3000'},
        body:JSON.stringify(payload.state)
    }
    console.log("inAction",payload)
      fetch(`https://hackathon-flatbuddy.herokuapp.com/users/${payload.id}/submitDetails`,requestOptions)
      .then(response => response.json())
      .then(  data =>  {
        console.log("data",data)
        
        fetch(`https://hackathon-flatbuddy.herokuapp.com/users/${payload.id}/result`)
        .then(response => response.json())
        .then( data2 =>  {
          console.log("getResuslts",data2)
          dispatch( {
        type:ON_GET_RESULT,
        payload:data2
      })
        
      }).catch((error)=>{
      console.log(error)
        })
        
          
     }).catch((error)=>{
        console.log(error)
      })
     
     
    };

    export const isLogin = payload => {
      return {
          type:IS_LOGIN,
          payload:payload
      }
  }