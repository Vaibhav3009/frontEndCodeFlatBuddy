import React, { Component } from 'react'
import LeftSideBar from './leftSideBar'
import styles from '../css/dashboard.module.css'
import RenderList from './RenderList'
import SignOutButton from './SignOut'
class Results extends Component {
    render() {
        return (
            <div className='container'>
            

            <div className='row'>
            
            <div className={`col-4 text-center ${styles.leftSide}`}>
      
                <LeftSideBar isOnResult={true}/>
      
             </div>

             <div className={`col-8 `}>
      
                <RenderList/>
      
             </div>
            

            </div>
   
            </div>
        )
    }
}
export default Results
