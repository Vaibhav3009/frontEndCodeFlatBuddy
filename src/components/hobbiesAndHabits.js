import React,{useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { onHabitsChange, onHobbiesChange } from "../actions/hobbiesAndHabitsAction";
import styles from '../css/hobbiesAndHabits.module.css'
const HobbiesAndHabits = ()=>{
  const {hobbies, habits} = useSelector(state=>state.hobbiesAndHabits);
  const state = useSelector(state=>state)
  console.log(state)
  const dispatch = useDispatch();
  const {
    movies,
    gaming,
    sports,
    reading,
    writing,
    photography,
    highVolumeMusic
  } = hobbies;
  const {
    superClean,
    nightOwl,
    earlyBird,
    smoking,
    drinking,
    vegetarian,
    student
  } = habits;
  return (
    <div>
    <div>
    <div className={styles.hobbyContainer} >
    <div>
      <h1>Hobbies</h1>
      </div>
      <div className={`${styles.hobbies}`}>
      
      
        <div onClick = {()=>dispatch(onHobbiesChange({...hobbies, movies:!movies}))}>
          <button className={`${styles.tabs} ${hobbies.movies?styles.active:styles.inactive}`} >Movies</button>
        </div>
        <div  onClick={() => dispatch(onHobbiesChange({ ...hobbies, gaming: !gaming }))}>
          <button className={`${styles.tabs} ${hobbies.gaming?styles.active:styles.inactive}`}>Gaming</button>
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, sports: !sports }))}>
         <button className={`${styles.tabs} ${hobbies.sports?styles.active:styles.inactive}`}>Sports</button>
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, reading: !reading }))}>
          <button className={`${styles.tabs} ${hobbies.reading?styles.active:styles.inactive}`}>Reading</button>
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, writing: !writing }))}>
          <button className={`${styles.tabs} ${hobbies.writing?styles.active:styles.inactive}`}>Writing</button>
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, photography: !photography }))}>
          <button className={`${styles.tabs} ${hobbies.photography?styles.active:styles.inactive}`}>Photography</button>
        </div>
        <div onClick={() => dispatch(onHobbiesChange({ ...hobbies, highVolumeMusic: !highVolumeMusic }))}>
         <button className={`${styles.tabs} ${hobbies.highVolumeMusic?styles.active:styles.inactive}`}>High Volume Music</button>
        </div>
        </div>
        </div>


        <div className={`${styles.habitContainer}`}>
        <div>
      <h1>Habits</h1>
      </div>
        <div  className={`${styles.habits}`}>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, superClean: !superClean }))}>
          <button className={`${styles.tabs} ${habits.superClean?styles.active:styles.inactive}`}>Super Clean</button>
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, nightOwl: !nightOwl }))}>
          <button className={`${styles.tabs} ${habits.nightOwl?styles.active:styles.inactive}`}>Night Owl</button>
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, earlyBird: !earlyBird }))}>
          <button className={`${styles.tabs} ${habits.earlyBird?styles.active:styles.inactive}`}>Early Bird</button>
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, smoking: !smoking }))}>
          <button className={`${styles.tabs} ${habits.smoking?styles.active:styles.inactive}`}>Smoking</button>
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, drinking: !drinking }))}>
         <button className={`${styles.tabs} ${habits.drinking?styles.active:styles.inactive}`}>Drinking</button>
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, vegetarian: !vegetarian }))}>
        <button className={`${styles.tabs} ${habits.vegetarian?styles.active:styles.inactive}`}>Vegetarian</button>
        </div>
        <div onClick={() => dispatch(onHabitsChange({ ...habits, student: !student }))}>
        <button className={`${styles.tabs} ${habits.student?styles.active:styles.inactive}`}>Student</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HobbiesAndHabits;