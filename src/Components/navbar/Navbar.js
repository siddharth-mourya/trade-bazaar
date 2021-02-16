import React from 'react';
import './navbar.css';
import {BrowserRouter as Router, Link  } from "react-router-dom";

export default function  Navbar()
{
    return(
            <>
                <nav class="navbar navbar-expand-lg ">
                    <img  className="navbar-brand" src="/images/logo_white.png" alt=".." />
                    <button class="navbar-toggler custom-toggler"  type="button" data-toggle="collapse" data-target="#toggle_navbar" aria-controls="toggle_navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="toggle_navbar">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="javascript:void(0)">DashBoard <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Companies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Inventory </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Negotiations </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">My Transaction</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">My Holdings</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Services</a>
                            </li>
                        </ul>
                        <div id="right-icons" className="ml-auto d-flex align-items-center h-100">
                               <a><img src="/images/notification_bell.svg"/></a>
                               <a><img src="/images/user_profile_nav.svg"/></a>
                        </div>
                    </div>
                </nav>
            </>
    )
}