import React from 'react';
import './navbar.css';
import { useEffect, useState } from 'react';

export default function  Navbar(props)
{
    
    let [resized , setResized ] = useState({})

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
            };
    }

    useEffect(()=>{
        if(props.navItem)
        {
            console.log(document.getElementById(props.navItem).classList);
            document.getElementById(props.navItem).classList.add("active");
        }
    },[])

    useEffect(() => {
                function handleResize()
                {
                    let str = getWindowDimensions()
                    setResized(str)
                }
                
                window.addEventListener('resize', handleResize);

                let size = getWindowDimensions();
                console.log("size ",size );
                let navitem = document.getElementsByClassName("nav-item")
                console.log(navitem);

                if(size.width > 991)
                {
                    for(let i=0 ; i<navitem.length ; i++)
                    {
                        navitem[i].style.margin ="0 2px"
                    }
                    
                }
                else{
                    for(let i=0 ; i<navitem.length ; i++)
                    {
                        navitem[i].style.margin ="0 5px"
                    }
                }
                
                return () => window.removeEventListener('resize', handleResize);
        }
     
    , [resized]);

    return(
            <>
            <div  className="navbar-top"> 
                <nav class="navbar navbar-expand-lg ">
                    <img  className="navbar-brand" src="/images/logo_white.png" alt=".." />
                    <button class="navbar-toggler custom-toggler"  type="button" data-toggle="collapse" data-target="#toggle_navbar" aria-controls="toggle_navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="toggle_navbar">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li id="dashboard" class="nav-item">
                                <a class="nav-link" href="/dashboard">DashBoard <span class="sr-only">(current)</span></a>
                            </li>
                            <li id="companies" class="nav-item">
                                <a class="nav-link" href="/companies">Companies</a>
                            </li>
                            <li id="followed-companies" class="nav-item">
                                <a class="nav-link" href="/followedCompanies">Followed Compaines </a>
                            </li>
                            <li id="news" class="nav-item">
                                <a class="nav-link" href="/news">News </a>
                            </li>
                            <li id="specific-company" class="nav-item">
                                <a class="nav-link" href="/specificCompany">Specific Company</a>
                            </li>
                        </ul>
                        <div id="right-icons" className="ml-auto d-flex align-items-center h-100">
                               <a><img src="/images/notification_bell.svg"/></a>
                               <a href="/profile"><img src="/images/user_profile_nav.svg"/></a>
                        </div>
                    </div>
                </nav>
            </div>

            </>
    )
}