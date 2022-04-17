import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../images/google.png';
import Loading from '../Shered/Loading/Loading';
import './Login.css'
const Login = () => {
//google sign in
const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

//

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';

    const navigate=useNavigate();
   const onBlurEmail=(event)=>{
       setEmail(event.target.value);
   }
   const onBlurPassword=(event)=>{
    setPassword(event.target.value);
   }

   if (loading || loading1) {
    return <Loading></Loading>
}

   let errorShow;

   if (error || error1) {
    errorShow = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
}
  
   if (user || user1) {
    navigate(from, {replace: true});
}
const signInwithform=(event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
}
    return (
        <div className='body'>
            <div className='login-form'>
                <h3>{errorShow}</h3>
            <form className='form-control' onSubmit={signInwithform}>
                <h1>Login</h1>
                <span>Email</span>
                <br/>
                <input onBlur={onBlurEmail} type="email" name='' id='email-form' required/>
                <br/>
                
                <span>password</span>
                <br/>
                
                <input onBlur={onBlurPassword} type="password" name='' id='password-form' required/>
                <br/>
                <br/>
                <button className='button-form'>Login</button>
                <br/>
            </form>
            <p>New to Creative Photographer?<Link className='account-color' to="/signup">create an account</Link></p>
            </div>

            <div>
            <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Login;