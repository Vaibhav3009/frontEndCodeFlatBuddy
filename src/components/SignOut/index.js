import React from 'react';
import { storage,auth } from '../firebase'

function signOut () {
  
  auth.signOut().then(function() {
    localStorage.removeItem("user");
    console.log("Successfully signed out!");
    window.location.href = "/";
  }).catch(function(error) {
    console.log(error.message);
  });
}
 
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={signOut}>
    Sign Out
  </button>
);
 
export default SignOutButton;