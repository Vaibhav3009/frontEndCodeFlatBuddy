import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import { BudgetRange } from "../utils/constants";
import { getResults, onBudgetChange,getResultsUpdate} from "../actions/hobbiesAndHabitsAction";
import styles from '../css/leftSideBar.module.css'
const LeftSideBar = (props) =>{
  const dispatch = useDispatch();
  const state = useSelector(state => (state.hobbiesAndHabits));

    
  const onDataChange = async(e,budgetObject)=>{
    e.preventDefault()
    const payload = {
      budgetObject,
      isOnResult:props.isOnResult,
      id:localStorage.getItem('userId'),
      location:state.location,
      state
    }      
    if(props.isOnResult){
      await dispatch(getResultsUpdate(payload));
    }else{
      await dispatch(onBudgetChange(payload));
    }
  }
  return ( 
      <div>
        <Search isOnResult={props.isOnResult} />
        <div>
          <h4>Budget</h4>
         {
           BudgetRange.map((budgetObject, index)=>(
           <div className={`${state.budgetMin === budgetObject.budgetMin ? styles.budgetActive : styles.budgetInActive}`} key = {index} onClick={(e)=>onDataChange(e,budgetObject) }>
              {budgetObject.text}
           </div>
           ))
         }
        </div>
      </div>
  )
};


export default LeftSideBar;