import React from "react";
import './login.css';
import {BrowserRouter as Router, Link  } from "react-router-dom";

export default function  Login()
{
    return(
        
            <div id="login_page" className="container-fluid">
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
                            <p>Welcome Back,</p>
                            <form className="mb-3">
                                <div class="form-group">
                                    <label for="useId">User ID*</label>
                                    <input type="text" class="form-control" id="userId" aria-describedby="text" placeholder="Julia" />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password *</label>
                                    <input type="password" class="form-control" id="password" placeholder="**************" />
                                </div>

                                <button type="submit" class="btn w-100">Submit</button>
                            </form>
                            <div id="forgot-div" className="d-flex text-center mx-auto">
                                <Link to="/" class="mx-auto forgot-userid text-dark">Forgot userId?</Link>
                                <span>|</span>
                                <Link to="/" class="mx-auto forgot-password text-dark">Forgot Password</Link>
                            </div>
                            <hr className="w-50 below-forgot" />
                            <p className="text-dark text-center w-100">Don't have an account? <Link to="/signup" className="signup_link" >Signup</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}