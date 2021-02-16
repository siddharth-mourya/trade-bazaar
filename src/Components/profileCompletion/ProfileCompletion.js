import React from "react";
import {  } from "./profileCompletion.css";

export default function ProfileCompletion()
{
    return(
        <div className="timeline-wrapper">
            <div className="d-flex py-4 px-3 justify-content-center align-items-center"> <img src="/images/timeline_image.svg" />
                <p className="my-0"> Trade Ready Steps</p>
            </div>
            <hr />
            <div className="timeline-wrapper-wrapper">
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