import React,{useEffect,useState} from 'react';
import LeftSideBar from './leftSideBar';
import HobbiesAndHabits from './hobbiesAndHabits';
import { useSelector , useDispatch} from 'react-redux';
import SignOutButton from './SignOut';
import { onSubmit } from '../actions/hobbiesAndHabitsAction';
import userAdd from '../actions/UserAction';
import { getResults } from '../actions/hobbiesAndHabitsAction';
import styles from '../css/dashboard.module.css'
import { withRouter } from 'react-router-dom';
const Dashboard = (props) =>{
  const state = useSelector(state => {console.log(state)
    return(state.hobbiesAndHabits)});
  
  const userState =useSelector(state => state.user)
   
  const results = useSelector(state=>state.results)
  console.log(results)
  
  
  
  console.log("state",state)
  const payload = {
    id:localStorage.getItem('userId'),
    budgetObject:{
      budgetMin:state.budgetMin,
      budgetMax:state.budgetMax
    },
    location:state.location,
    state:{
      budgetMax:state.budgetMax,
      budgetMin:state.budgetMin,
      habits:{
        drinking: state.habits.drinking,
earlyBird: state.habits.earlyBird,
nightOwl: state.habits.nightOwl,
smoking: state.habits.smoking,
student: state.habits.student,
superClean: state.habits.superClean,
vegetarian: state.habits.vegetarian,
      },
      hobbies:{
        gaming: state.hobbies.gaming,
highVolumeMusic: state.hobbies.highVolumeMusic,
movies: state.hobbies.movies,
photography: state.hobbies.photography,
reading: state.hobbies.reading,
sports: state.hobbies.sports,
writing:state.hobbies.writing,
      },
      location: state.location
    }
  }
  const dispatch = useDispatch();

  

  const getResultPage = async() => {
    console.log('payload',payload)
    
    await dispatch(onSubmit(payload))

    // dispatch(getResults(payload))
    
    if(results!=[] && results!=null){
      props.history.push("/results")
    }
  }


  return(
    <div className="container">
      
       <div className='row'>
       <div className={`col-4 text-center ${styles.leftSide}`}>
      
      <LeftSideBar isOnResult={false}/>
      
      </div>
      <div className='col-8'>
      <HobbiesAndHabits/>
      </div>
      </div>
    
      <div style={{textAlign:"center",marginTop:'20px'} }>
        <button className='btn-primary rounded' onClick = {()=>getResultPage()}
        >Submit</button>
      </div>
      
    </div>
  )
}

export default withRouter(Dashboard);