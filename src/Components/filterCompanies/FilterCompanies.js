import React  , { useState, useEffect } from "react";
import "./filterCompanies.css";

export default function ProfileCompletion()
{
    let [resized , setResized ] = useState({})

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
            };
    }

    useEffect(() => {
                function handleResize()
                {
                    let str = getWindowDimensions()
                    setResized(str)
                }
                
                window.addEventListener('resize', handleResize);

                let size = getWindowDimensions();
                console.log("size ",size );
                if(size.width > 991)
                {
                    document.getElementById("filter_companies_wrapper_items").classList.add('show')
                }
                else{
                    document.getElementById("filter_companies_wrapper_items").classList.remove('show')
                   
                }
                
                return () => window.removeEventListener('resize', handleResize);
        }
     
    , [resized]);


    return(
        <div className="filter_companies_wrapper">
            <div id="filter_companies_heading" className="d-flex m-2 justify-content-between align-items-center"> 
                <p className="my-0 p-16-20-bold-gray"  role="button" data-toggle="collapse" data-target="#filter_companies_wrapper_items" aria-expanded="false" aria-controls="filter_companies_wrapper_items"> 
                    <i class="fa fa-filter mr-1" aria-hidden="true"></i>
                    Filter
                </p>
                <p role="button" className="p-10-12-600-gray my-0"><u>Clear All</u></p>
            </div>
            <hr className="mb-0" />
            <div className="filter_companies_wrapper_items collapse multi-collapse " id="filter_companies_wrapper_items" >
                <div className="d-flex border-bottom p-2  align-items-center justify-content-between" role="button" data-toggle="collapse" data-target="#sector_filter" aria-expanded="true" aria-controls="sector_filter" >
                    <p className="m-0 p-14-17-600-gray">Sector</p>
                    <img className="" src="/images/plus-sign.svg"/>
                </div>
                <div className="p-2 pl-3 collapse multi-collapse show" id="sector_filter">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label p-12-15-500-gray" for="exampleCheck1">Check me out</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label p-12-15-500-gray" for="exampleCheck1">Check me out</label>
                    </div>
                </div>
                <div className="d-flex border-bottom p-2  align-items-center justify-content-between" role="button" data-toggle="collapse" data-target="#stage_of_company" aria-expanded="false" aria-controls="stage_of_company" >
                    <p className="m-0 p-14-17-600-gray">Stage Of Company</p>
                    <img className="" src="/images/plus-sign.svg"/>
                </div>
                <div className="p-2 pl-3 collapse multi-collapse" id="stage_of_company">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label p-12-15-500-gray" for="exampleCheck1">Check me out</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label p-12-15-500-gray" for="exampleCheck1">Check me out</label>
                    </div>
                </div>
            </div>
        </div>
    )
}