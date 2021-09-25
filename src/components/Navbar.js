import React, { Component } from 'react'
import insta_logo from '../images/logo.png'
import { storage,auth } from './firebase'
import { connect } from 'react-redux';
import { isLogin } from '../actions/hobbiesAndHabitsAction';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
class Navbar extends Component {

    constructor(props){
        super(props);
       
    }

    handleUser = (e) => {
        e.preventDefault()
         this.props.isLogin(localStorage.getItem("user")!=undefined || localStorage.getItem("user")!=null)
        console.log('login',this.props.isLoggedIn)
if(this.props.isLoggedIn){
    auth.signOut().then(function() {
        localStorage.removeItem("user");
        console.log("Successfully signed out!");
        window.location.href = "/";
      }).catch(function(error) {
        console.log(error.message);
      });
}
else{
    window.location.href = '/'
}

    }

    checkLogin = () =>{
        if(localStorage.getItem("user")!=undefined || localStorage.getItem("user")!=null){
            this.setState({isLoggedIn:true})
    }
    else{
        this.setState({isLoggedIn:false})
    }

    }

    componentDidMount(){
        this.checkLogin()
    }
    render() {
        
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a style = {{marginLeft:'1em',fontSize:'1.4em'}}class="navbar-brand" href="/dashboard">FlatBuddy</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/dashboard">Home</a>
    
    
      <a onClick={(e)=>this.handleUser(e)} class="nav-item nav-link active" href="#">{this.props.isLoggedIn ? 'Logout':'Login'}</a>
    </div>
  </div>
</nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state',state)
    return{
        isLoggedIn:state.login.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        isLogin
    },dispatch)
       
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
