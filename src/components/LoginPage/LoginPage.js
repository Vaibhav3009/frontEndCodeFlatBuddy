import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import inst_image from '../../images/login.jpg'
import insta_logo from '../../images/logo.png'
import './LoginPage.css'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
class LoginPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLogin:true
        }
    }
    handleChange = () => {
       
        this.setState({isLogin:!this.state.isLogin})
    }
    render() {
        return (    
            <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
               <Grid container direction='column' justifyContent="center"
  alignItems="center">
                   <Grid item lg={2} md={3}></Grid>
                   <Grid item lg={8} md={6}>
                    <div className='loginPage_main'>
                        <div style={{marginTop: 100 + 'px', marginRight: 30 + 'px'}}>
                        <img src={inst_image} width='410px' height='420px'></img>
                        </div>
                        <div className='rightComponent'> 
                        <img className='loginPage_logo' src={insta_logo}></img>
                      {/* <SignIn/> */}
                      {this.state.isLogin?<SignIn />: <SignUp/>}
                    {this.state.isLogin!=true?  <div>
               <p>Already have an account?<span onClick={()=>this.handleChange()} style={{color:'#5EA9F7',fontWeight:'bold',cursor:'pointer'}}> Sign in</span></p>
           </div>: <div>
               <p>Don't have an account?<span onClick={()=>this.handleChange()} style={{color:'#5EA9F7',fontWeight:'bold',cursor:'pointer'}}> Sign up</span></p>
           </div>}
                      </div>
                    </div>
                    


                   </Grid>
                   <Grid item lg={2} md={3}></Grid>
               </Grid> 
            </div>
        )
    }
}

export default LoginPage
