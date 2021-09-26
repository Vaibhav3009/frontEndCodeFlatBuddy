import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import inst_image from '../../images/login.jpg'
import insta_logo from '../../images/logo.png'
import './LoginPage.css'
import '../UserDetails/UserDetails.css'
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
            <div class="container-fluid ">
            <div  class="row main-content bg-success text-center ">
                <div class="col-md-5 text-center company__info noPadding">
                    
                    <img height='100%' style={{borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}} src={inst_image}/>
                </div>
                
                <div class="col-md-7 col-xs-12 col-sm-12 login_form ">
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
            </div>
        )
    }
}

export default LoginPage
