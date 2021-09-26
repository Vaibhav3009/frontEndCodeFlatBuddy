import React, { Component } from 'react'
import {connect} from 'react-redux'
import ResultReducer from '../reducers/ResultReducer'
import { getResults } from '../actions/hobbiesAndHabitsAction'
import { bindActionCreators } from 'redux'
import { onBudgetChange,onLocationChange } from '../actions/hobbiesAndHabitsAction'
import { init, sendForm } from 'emailjs-com'
import { withRouter } from 'react-router'
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



class RenderList extends Component {

    constructor(props){
        super(props)
}

toastMssg = () => {
    toast.success('Email Sent ',  {position: toast.POSITION.TOP_RIGHT})
}
handleEmail = (e,to_name,to_email,self) => {
    e.preventDefault()
    
    fetch(`https://hackathon-flatbuddy.herokuapp.com/users/sendMail?to_email=${to_email}&to_name=${to_name}&self=${self}`)
    .then(res=> this.toastMssg())
    .catch(err=>console.log(err))
   }
 render() {
        const {results} = this.props
        console.log(this.props)
        
        
        return (
            <div>
            {results.map((result,index)=>{
                return (
                    
                <div key={index}>
                <div style={{margin:'5%'}} className="card shadow-sm p-3 mb-5 bg-white rounded">
  <div style = {{backgroundColor:'#D6EEFE'}}className="card-header">
    {result.username}
  </div>
  <div className="card-body">
  <form>
    <h5 className="card-title">Name: {result.name}</h5>
    <h5 className="card-text">Contact: {result.email}</h5>
    <h6>Hobbies</h6>
    <div className='container'> 
    <div class="row">
     {result.hobbies.movies == true ? <button  style ={{width:'inherit',borderRadius:20,backgroundColor:'#0178DB',color:'white',margin:'3px'}} disabled>Movies</button>:null}
     {result.hobbies.gaming == true ? <button  style ={{width:'inherit',height:'20%',borderRadius:20,backgroundColor:'#0178DB',color:'white',margin:'3px'}} disabled>Gaming</button>:null}
     {result.hobbies.highVolumeMusic == true ? <button  style ={{width:'inherit',height:'20%',borderRadius:20,backgroundColor:'#0178DB',color:'white',margin:'3px'}} disabled>Loud Music</button>:null}
     {result.hobbies.photography == true ? <button  style ={{width:'inherit',height:'20%',borderRadius:20,backgroundColor:'#0178DB',color:'white',margin:'3px'}} disabled>Photography</button>:null}
     {result.hobbies.reading == true ? <button  style ={{width:'inherit',height:'20%',borderRadius:20,backgroundColor:'#0178DB',color:'white',margin:'3px'}} disabled>Reading</button>:null}
     {result.hobbies.sports == true ? <button  style ={{width:'inherit',height:'20%',borderRadius:20,backgroundColor:'#0178DB',color:'white',margin:'3px'}} disabled>Sports</button>:null}
     {result.hobbies.writing == true ? <button  style ={{width:'inherit',height:'20%',borderRadius:20,backgroundColor:'#0178DB',color:'white',margin:'3px'}} disabled>Writing</button>:null}
     </div>
    </div>
    <a onClick={(e)=>this.handleEmail(e,result.name,result.email,this.props.user.name)} href="#" className="btn btn-primary">Send Email</a>
    </form>
  </div>
</div>
            </div>

                )
            })}
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        results:state.results,
        hobbiesAndHabits:state.hobbiesAndHabits,
        user:state.user
    }
    
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
       getResults,onBudgetChange,onLocationChange
    },dispatch)
       
}

export default connect(mapStateToProps,mapDispatchToProps)(RenderList)



