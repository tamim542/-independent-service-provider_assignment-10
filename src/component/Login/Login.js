//import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../images/google.png';
import Loading from '../Shered/Loading/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
const Login = () => {
//google sign in
const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

//
   const emailRef = useRef('');
   // const passwordRef = useRef('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

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

// reset password
const resetPassword = async () => {
    const email =emailRef.current.value;
    if (email) {
        await sendPasswordResetEmail(email);
        toast('Sent email');
        console.log('abc correct');
    }
    else{
        //toast('please enter your email address');
        console.log('wrong hi');
    }
}
    return (
        <div className='body'>
            <div className='login-form'>
                <h3>{errorShow}</h3>
            <form className='form-control' onSubmit={signInwithform}>
                <h1>Login</h1>
                <span>Email</span>
                <br/>
                <input onBlur={onBlurEmail} ref={emailRef} type="email" name='' id='email-form' required/>
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
            <p>Forget Password? <span className='reset-password' onClick={resetPassword}>Reset Password</span> </p>
            </div>

            <div>
            <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;