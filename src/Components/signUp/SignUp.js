import React, { useEffect, useState } from "react";
import './signUp.css';
import {BrowserRouter as Router, Link  } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput  , { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'

export default function SignUp()
{
    let [cnfPassword , setCnfPassword ] = useState("")
    let [password , setPassword] = useState("")
    let [email , setEmail] = useState("")
    let [name , setName] = useState("")
    const [value, setValue] = useState()
    let [phone ,setPhone] = useState('')
    let [passwordMatch ,setPasswordMatch] = useState(true)

    let [no_of_char , setNoOfChar] = useState(false);
    let [digit , setDigit]= useState(false);
    let [special_char , setSpecialChar] = useState(false);
    let [upper_case_letter , setUpperCaseLetter ]  = useState(true);
  
    useEffect(()=> {
        setUpperCaseLetter(password.search(/[A-Z]/g) >= 0 ? true : false)
        setDigit(password.search(/[0-9]/g) >= 0 ? true : false)
        setNoOfChar(password.length >= 8 ? true : false)
        setSpecialChar(password.search(/[!@#\$%\^\&*\)\(+=._-]/g) >= 0 ? true : false)

    }, [password])

    useEffect(() => {
        setPhone(value)
        console.log("phone " , phone);
     }, [value])

    function matchPassword()
    {
        if(password != cnfPassword)
        {
            document.getElementById("cnfpassword").style.border="2px solid Red"
            setPasswordMatch(false)
        }
        else{
            document.getElementById("cnfpassword").style.border="2px solid green"
            setPasswordMatch(true)
        }
    }

    return(
            <div id="sign_page" className="container-fluid">
                <div className="row m-0">
                    <div className="leftcol col-lg-6 100vh col-md-6 d-lg-flex d-md-flex d-sm-none d-xs-none justify-content-center align-items-center ">
                        <div className="text-center w-50 w-md-75 ">
                            <img src="/images/login-shield.png" className="mb-4" alt="..." />
                            <br />
                            <h5>Your data 100% secure with us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="rightcol col-lg-6 100vh col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
                        <div className="w-lg-50 w-md-75 w-sm-75">
                            <img src="/images/logo.png" alt="..." className="mb-4" />
                            <p>Create New Account</p>
                            <button id="social_signup" className="btn rounded font-weight-bold w-100"><img src="/images/google_logo.png" alt="google logo not found" className="mr-1" /> Sign Up With Google</button>
                            <div className="or-seperator"><i>or</i></div>
                            <form className="mb-3">
                                <div className="form-group">
                                    <label for="name">Name *</label>
                                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="name" aria-describedby="name" placeholder="Julia Robert" required />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email *</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}  id="email" aria-describedby="email" placeholder="julia@gmail.com"  required/>
                                </div>
                                <div className="form-group">
                                    <label for="phone">Mobile number *</label>
                                    <PhoneInput
                                        id="phone"
                                        defaultCountry="IN"
                                        placeholder="9810140101"
                                        international
                                        value={value}
                                        onChange={setValue}/>
                                </div>
                              
                                <div className="form-group">
                                    <label for="password">Password *</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}  id="password" placeholder="**************" required/>
                                </div>
                                <div className="form-group">
                                    <label for="cnfpassword">Confirm Password *</label>
                                    <input type="password" className="form-control" value={cnfPassword} onBlur={matchPassword} onChange={(e) => setCnfPassword(e.target.value)}  id="cnfpassword" placeholder="**************" required/>
                                    {passwordMatch ?<></>:  <small className="text-danger">Password not  matched</small> }
                                </div>
                                <div className="password-check form-group">
                                    <p id="letter" className="invalid">
                                        { no_of_char ? <img src="/images/tick.svg" alt="dsf" /> : <img src="/images/cross.svg" alt="dsf" /> }  Password must be 8 or more characters</p>
                                    <p id="capital" className="invalid"> 
                                        { upper_case_letter ? <img src="/images/tick.svg" alt="dsf" /> : <img src="/images/cross.svg" alt="dsf" /> } Password must contain 1 or more uppercase characters.</p>
                                    <p id="number" className="invalid">  
                                        { digit ? <img src="/images/tick.svg" alt="dsf" /> : <img src="/images/cross.svg" alt="dsf" /> } Password must contain 1 or more digit characters.</p>
                                    <p id="length" className="invalid">  
                                        { special_char ? <img src="/images/tick.svg" alt="dsf" /> : <img src="/images/cross.svg" alt="dsf" /> }Password must contain 1 or more special characters.</p>
                                </div>
                                <a href="/dashboard" type="submit" className="btn w-100">Sign up</a>
                            </form>
                            <hr className="w-25 after_form" />
                            <p className="text-dark text-center w-100">Already Have an account? <Link to="/" className="signup_link" >Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}