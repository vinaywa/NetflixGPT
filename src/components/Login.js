import React, { useState } from 'react' // react arrow function component export 
import Header from './Header'

const Login = () => {
  const [isSignInForm,setSignInForm]=useState(true);// state variable used for rerendering
  const handleClick=()=>{
      setSignInForm(!isSignInForm);
  }
  return (
    <div >
      <Header/>
      <div className="absolute  rounded-lg ">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt='logo'>
    </img>
      </div>
      <form className="w-4/12 bg-black absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm&&<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg"></input>}
        {!isSignInForm&&<input type="number" placeholder="Phone no." className="p-4 my-4 w-full bg-gray-700 rounded-lg"></input>}

        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg"></input>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg"></input>
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg" >
           {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleClick}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered Sign in now"}</p>
      </form>
    </div>
  )
}

export default Login
