import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';
const Checkout = () => {

    let message;
    const handleSubmit=()=>{
        toast('Thanks for Booking');
    }

    const onSubmitForm=(event)=>{
        event.preventDefault();
    }

    return (
        <div>
            
            <div className='body'>
            <div className='login-form'>
            <form className='form-control' onSubmit={onSubmitForm}>
                <h3>{message}</h3>
                <h1>Form</h1>
                <span>Email</span>
                <br/>
                <input  type="email" name='email' id='email-form' required/>
                <br/>
                
                <span>Address</span>
                <br/>
                
                <input  type="text" name='address' id='password-form' required/>
                <br/>
                <br/>
                <span>Phone No</span>
                <br/>
                <input  type="text" name='phone' id='password-form' required/>
                <br/>
                <br/>
                <button className='button-form' onClick={handleSubmit}>Submit</button>
                <br/>
            </form>
            
            </div>
        </div>
        <ToastContainer/>
        </div>
    );
};

export default Checkout;