import { ON_USER_SUBMIT } from "../actions/types";

const initialUser = {
    user:{},
    it:false,
    id: 0,
    hobbies: {
        id:0,
        movies: false,
        gaming: false,
        sports: false,
        reading: false,
        writing: false,
        photography: false,
        highVolumeMusic: false
    },
    habits: {
        id: 0,
        superClean: false,
        nightOwl: false,
        earlyBird: false,
        smoking: false,
        drinking: false,
        vegetarian: false,
        student: false
    },
    username: "",
    hobbyList: "",
    habitList: "",
    userId: null,
    name: "",
    email: "",
    budgetMin: 0,
    budgetMax: 5000,
    location:""
}

const UserReducer = (state = initialUser, action) =>{
    const {payload, type } = action;
    switch(type){
      case(ON_USER_SUBMIT):{
         
         console.log(payload)
        return {...state,user:payload,it:true};
      }
      
     default:
        return state;
    }
  }


  
  export default UserReducer;