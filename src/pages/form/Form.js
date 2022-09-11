import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import {useNavigate} from "react-router-dom"

import { formaction } from '../../redux/action/actionFunction'

import './form.css'

const Form = () => {

    const dispatch = useDispatch();

    const Navigate = useNavigate();

    const [name,setname]=useState('')
    const [lastname,setlastname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    console.log("name is ",name,lastname,email,password)


    const Submit = () => {
    
        dispatch(
            formaction(
                {state:{ name ,lastname ,email,password}
            })
            
            
            )
            Navigate("/")

    }
    
    // const [name,setname]=useState('')
    return (
        <div>
            <div className="fullscreen-container">
                <div className="sign-up-container">
                    <h1 className="signup-header">Sign Up</h1>
                    <p className="signup-text">It's Free and Only Take a Minute!</p>
                    <form className="form">
                        <div className="input-container">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" 
                             id="first-name" name="name"
                             value={name}
                                onChange={(e)=>{setname(e.target.value)}}
                              
                              />
                        </div>
                        <div className="input-container">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" 
                             id="last-name"
                              name="lastname"
                              onChange={(e)=>{setlastname(e.target.value)}}
                              value={lastname}
                              
                              />
                              
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                             id="email" name="email" 
                             onChange={(e)=>{setemail(e.target.value)}}
                             value={email}
                             />
                             
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                             id="password" name="password"
                             onChange={(e)=>{setpassword(e.target.value)}}
                             value={password}
                              />
                           
                        </div>
                        {/* <div className="input-container">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="confirm-password"
                                
                                id="confirm-password"
                                name="confirm-password"
                            />
                        </div> */}
                        <button type='button' onClick={Submit} >Sign Up</button>
                        <div className="login-here">
                            <p>Already have an account?</p>
                            <a href="">Login Here</a>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Form