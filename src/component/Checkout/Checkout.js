import React from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';
const Checkout = () => {

    
    
    const handleSubmit=()=>{
      
        
      
        toast('Thanks for Booking');
   
    }


    return (
        <div>
            
            <div className='body'>
                <div className='checkout-center'>
            <div className='login-form'>
            <form className='form-control' >
               
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
                <button className='button-form' onClick={handleSubmit}><span style={{color:'white'}}>Submit</span></button>
                <br/>
            </form>
            
            </div>
        </div>
        </div>
        <ToastContainer/>
        </div>
    );
};

export default Checkout;