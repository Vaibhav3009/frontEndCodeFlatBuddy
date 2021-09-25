import React, { Component } from 'react'
import { storage,auth } from '../firebase'
import userAdd from '../../actions/UserAction'
import {loggedInUser} from '../../actions/hobbiesAndHabitsAction'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getSuggestedQuery } from '@testing-library/react';
import { isLogin } from '../../actions/hobbiesAndHabitsAction'
class SignIn extends Component {

    constructor(props){
        super(props)
        this.state={
            emailId:'',
            password:'',
            inValid: false
        }
    }
 
    componentDidMount(){
        if(localStorage.getItem("user")!=undefined || localStorage.getItem("user")!=null){
            fetch(`http://localhost:8080/users/email=${this.props.emailId}`)
            .then(response => response.json())
            .then( data =>  {
        
                console.log(data)
                 this.props.userAdd(data)
                 
               this.props.history.push("/dashboard")
            
                
        
            }).catch((error)=>{
        
            })
            
        }

        
    }
  
    login=()=>{
        // localStorage.setItem("users","admin"),
        // window.location.reload();
       
        auth.signInWithEmailAndPassword(this.state.emailId, this.state.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem("user",user);


    
    fetch(`http://localhost:8080/users/email=${this.state.emailId}`)
    .then(response => response.json())
    .then( data =>  {
        
        console.log(data)
        this.props.userAdd(data)


        
       localStorage.setItem("userId",JSON.stringify(data.id));
       this.props.history.push("/dashboard")
       this.props.isLogin(true);
       this.props.loggedInUser(data)

    }).catch((error)=>{
        console.log(error)
    })
    
   
  

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    this.setState({inValid: true});
  });
 
  
    }
    render() {
        return (
            <div>
            
          
           <div className='loginpage_signin'>
            <input className='loginpage_text' onChange={(e)=>this.setState({emailId:e.target.value})} placeholder='Email address' type='email'>

            </input>
            <input className='loginpage_text' onChange={(e)=>this.setState({password:e.target.value})} placeholder='Enter password' type='password'>

            </input>
            <button style={{cursor:'pointer'}} onClick={this.login} className='login_button'>Log in </button>
            </div>

            {this.inValid && 
                <div> 
                    Your email or password is incorrect
                </div>
            }
           
            </div>
           
        
        )
    }
}

const mapStateToProps = state => {
    return {
        user:state.user,
        hobbiesAndHabits:state.hobbiesAndHabits
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        userAdd,loggedInUser,isLogin
    },dispatch)
       
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignIn))
