import React, { Component } from 'react'
import SignOutButton from '../SignOut/index'
class Home extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <div>
                Hello

                <SignOutButton/>
            </div>

            
           
        )
    }
}

export default Home
