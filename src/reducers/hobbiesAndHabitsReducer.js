import { ON_HABITS_CHANGE, ON_HOBBIES_CHANGE, ON_BUDGET_CHANGE, ON_LOCATION_CHANGE, ON_USER_LOGIN } from "../actions/types";
const initialState = {
  hobbies:{
    movies: false,
    gaming: false,
    sports: false,
    reading: false,
    writing: false,
    photography: false,
    highVolumeMusic: false,
  },
  habits:{
    superClean: false,
    nightOwl: false,
    earlyBird: false,
    smoking: false,
    drinking: false,
    vegetarian: false,
    student: false,
  },
  location:"",
  budgetMax:5000,
  budgetMin:0
}



const hobbiesAndHabitsReducer = (state = initialState, action) =>{
  const {payload, type } = action;
  switch(type){
    case(ON_HABITS_CHANGE):{
      const habits = payload
      return {...state, habits};
    }
    case(ON_HOBBIES_CHANGE):{
      const hobbies = payload;
      return {...state, hobbies};
    }
    case(ON_BUDGET_CHANGE):{
      const {budgetMax, budgetMin} = payload;
      return { ...state, budgetMax, budgetMin};
    }
    case(ON_LOCATION_CHANGE):{
      const address = payload;
      return {...state, location:address};
    }
    case(ON_USER_LOGIN):{
      const {habits,hobbies,budgetMin,budgetMax,location} = payload
      console.log(payload)
      return {...state, habits,hobbies,budgetMin,budgetMax,location}

    }
    default:
      return state;
  }
}

export default hobbiesAndHabitsReducer;