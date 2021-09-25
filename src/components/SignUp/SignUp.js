import React, { Component } from 'react'
import { auth,storage } from '../firebase';
import userAdd from '../../actions/UserAction'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
class SignUp extends Component {

    constructor(props){
        super(props);
        this.state={
            emailId:"",
            name:null,
            username:null,
            password:"",
        }
        
    }

    
    handleChange = (event) => {
       
        var value = event.target.value;
        
        this.setState({
            
            [event.target.name]:value,
        })
       
    }

    newSignUp = () => {
        
        auth.createUserWithEmailAndPassword(this.state.emailId, this.state.password)
  .then((userCredential) => {
    // Signed in 
  
    var user = userCredential.user;

        
    let payload = {
        
        "username":this.state.username,
        "name":this.state.name,
        "email":this.state.emailId

    }

    const requestOptions = {
       
        method:"POST",
        headers:{'Content-Type':'application/json','Access-Control-Allow-Origin': 'http://localhost:3000'},
        body:JSON.stringify(payload)
    }
    
    fetch("https://hackathon-flatbuddy.herokuapp.com/users",requestOptions)
    .then(response => response.json())
    .then(async data =>  {

        console.log(user)
        localStorage.setItem("user",JSON.stringify(user));
        console.log(data)
        await this.props.userAdd(data)
        localStorage.setItem("userId",JSON.stringify(data.id));
       this.props.history.push("/dashboard")
    
        

    }).catch((error)=>{

    })
    // ...
  })
  .catch((error) => {
     
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
    }
    render() {
        return (
            <div>
                 <div className='loginpage_signin'>
            <input  name= 'emailId' className='loginpage_text' onChange={(e)=>this.handleChange(e)} placeholder='Email address' type='email'>

            </input>
            <input  name='name' className='loginpage_text' onChange={(e)=>this.handleChange(e)} placeholder='Full Name' type='text'>

            </input>
            <input name='username' className='loginpage_text' onChange={(e)=>this.handleChange(e)} placeholder='Username' type="text">

</input>
  <input input='password' className='loginpage_text' onChange={(e)=>this.setState({password:e.target.value})} placeholder='Password' type='password'>

</input>
            <button onClick={this.newSignUp} style={{cursor:'pointer'}} className='login_button'>Sign up </button>
            </div>
          
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        user:state.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        userAdd
    },dispatch)
       
}

export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(SignUp))
