import React from 'react'
import Header from './Header'
import profile from "../img/user.png"
import { signOut } from "firebase/auth";
import {auth }from "../utils/firebase" 
import { useNavigate } from 'react-router-dom';
const Browse = () => {
  const navigate=useNavigate();

const  handleSignout =()=>{
  signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
}
  return (
    <div className='flex justify-between p-2'>
      <div>
         <Header/>
      </div>
     
      <div className='p-4 w-16 h-14 m-2'>
        <img alt="profile-logo" src={profile}></img>
        <button  onClick={handleSignout} className='bg-red-100 w-12 h-12 mt-2'>Sign Out</button>
      </div>
    </div>
  )
}

export default Browse
