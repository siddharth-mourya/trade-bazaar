import React  , { useState, useEffect } from "react";
import "./profileCompletion.css";

export default function ProfileCompletion()
{
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    let [trade_ready_step_accordian , settradeReadyStepAccordian ] = useState("false")
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
                settradeReadyStepAccordian(true)
                if(size.width > 991)
                {
                    document.getElementById("trade_ready_dashboard").classList.add('show')
                    document.getElementById("trade_ready_dashboard_heading").classList.add('py-4')
                }
                else{
                    document.getElementById("trade_ready_dashboard").classList.remove('show')
                    document.getElementById("trade_ready_dashboard_heading").classList.remove('py-4')
                    console.log("yyy");
                }
                
                return () => window.removeEventListener('resize', handleResize);
        }
     
    , [resized]);


    return(
        <div className="timeline-wrapper">
            <div id="trade_ready_dashboard_heading" className="d-flex py-4 px-3 justify-content-center align-items-center" role="button" data-toggle="collapse" data-target="#trade_ready_dashboard" aria-expanded="false" aria-controls="trade_ready_dashboard"> 
                <img src="/images/timeline_image.svg" />
                <p className="my-0"> Trade Ready Steps</p>
            </div>
            <hr className="mb-0" />
            <div className="timeline-wrapper-wrapper collapse multi-collapse pt-4" id="trade_ready_dashboard" >
                <ul class="timeline">
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="percentage completed">10%</p> <i className="fa fa-angle-right"></i> </div>
                            <p className="">Profile</p>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between">
                            <p className="percentage ">20%</p> <i className="fa fa-angle-right"></i> </div>
                        <p>Bank Account</p>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between">
                            <p className="percentage ">40%</p> <i className="fa fa-angle-right"></i> </div>
                        <p>Demant Account</p>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between">
                            <p className="percentage ">60%</p> <i className="fa fa-angle-right"></i> </div>
                        <p>Select Share Transfer Process</p>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between">
                            <p className="percentage ">80%</p> <i className="fa fa-angle-right"></i> </div>
                        <p>Pan KYC Confirmation</p>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between">
                            <p className="percentage ">100%</p> <i className="fa fa-angle-right"></i> </div>
                        <p>Aadhar Confirmation</p>
                    </li>
                    <div id="filler"></div>
                </ul>
            </div>
        </div>
    )
}