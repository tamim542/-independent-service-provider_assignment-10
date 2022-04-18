import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignUp.css';
const SignUp = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [confirmpassword, setConfirmPasswowrd]=useState('');
    const [error, setError]=useState('');
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
   // const [email, set]=useState('');
    const navigate=useNavigate();
   const onBlurEmail=(event)=>{
       setEmail(event.target.value);
   }
   const onBlurPassword=(event)=>{
    setPassword(event.target.value);
   }
   const onBlurConfirmPassword=(event)=>{
      setConfirmPasswowrd(event.target.value);
   }

   if(user){
    navigate('/home');
}

   const onSubmitForm=(event)=>{
     event.preventDefault();
     if(password!==confirmpassword){
         setError('password does not match');
     }
     if(password.length<6){
        setError("password must be gather than 6 character")
     }
     createUserWithEmailAndPassword(email,password)
   }

   
    return (
        <div className='body'>
            <div className='signup-center'>
            <div className='login-form'>
            <form className='form-control' onSubmit={onSubmitForm}>
                <h3>{error}</h3>
                <h1>SignUP</h1>
                <span>Email</span>
                <br/>
                <input onBlur={onBlurEmail} type="email" name='email' id='email-form' required/>
                <br/>
                
                <span>password</span>
                <br/>
                
                <input onBlur={onBlurPassword} type="password" name='password' id='password-form' required/>
                <br/>
                <br/>
                <span>Confirm password</span>
                <br/>
                <input onBlur={onBlurConfirmPassword} type="password" name='confirm-password' id='password-form' required/>
                <br/>
                <br/>
                <button className='button-form'><span style={{color:'white'}}>Sign Up</span></button>
                <br/>
            </form>
            <p>Have an already account?<Link className='account-color' to="/login"> Login</Link></p>
            </div>
            </div>
        </div>
    );
};

export default SignUp;