import React, { useState } from "react"; // react arrow function component export
import Header from "./Header";
import { checkValidate1,checkValidate2 } from "../utils/validate";
import { useRef } from "react";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import {  updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'

const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [isSignInForm, setSignInForm] = useState(true); // state variable used for rerendering
  const [ErrorMessage,setErrorMessage]=useState(null);
  const handleClick = () => {
    setSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null)
  const phno=useRef(null)

  const handleBtn = () => {
    
    // two ways to get data from input boxes first is by creating state variables and second is using useRef Hook
    let msg="";
    if(isSignInForm){
    msg = checkValidate1(email.current.value, password.current.value);
    }
    else{
      msg=checkValidate2(email.current.value,password.current.value,name.current.value,phno.current.value)
    }
    // console.log(msg);
    setErrorMessage(msg);
    if(msg)
      return;

    if(!isSignInForm)
    {
      // sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
      const {uid,email,displayName} = auth.currentUser;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
   navigate("/browse")
  // ...
}).catch((error) => {
  // An error occurred
  // ...
  setErrorMessage(error.message)
});
    console.log(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
    // ..
  });
    }
    else{
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)

    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute  rounded-lg ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 bg-black absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
        )}
        {!isSignInForm && (
          <input
          ref={phno}
            type="number"
            placeholder="Phone no."
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <p className="text-red-700 font-bold text-lg px-2">{ErrorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleBtn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleClick}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
