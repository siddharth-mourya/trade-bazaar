import React from "react";
import './riskProfileUpdate.css'

export default function RiskProfileUpdate()
{
    return(
        <>
             <div className="risk_profile_container container-fluid px-4 py-4"> 
                <div className="risk_profile_heading_row row d-flex flex-wrap justify-content-between border m-2 p-3">
                    <div className="col-lg-8 col-md-9 col-sm-12 order-lg-1 order-md-1 order-sm-2 order-2 " >
                        <p className="p-22-27-bold-gray mb-1">Fill Your Risk Profile Questions</p>
                        <p className="p-12-15-500-gray mb-1">Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged. It was popularised in the
                          1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 text-center order-lg-2 order-md-2 order-sm-1 order-1">
                        <img src="images/risk_profile_banner.svg" />
                    </div>
                </div>
                <br />
                <div className="row pl-3">
                    <div className="col">
                        <p className="p-22-27-bold-gray">Questions</p>
                        <p className="p-14-17-500-gray">Five question’s answer fill complsory then you can skip.</p>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-lg-5 col-md-8 col-12">
                        <form className="">
                            <div class="form-group ">
                                <label className="p-16-20-bold-gray" for="q1"><img src="images/tick2.svg" className="mr-2" width="20" height="20" />  1. Have you invested in unlisted shares before ?</label>
                                <select class="form-control" id="q1">
                                    <option>yes</option>
                                    <option>no</option>
                                </select>
                            </div>
                            <div class="form-group mt-4">
                                <label className="p-16-20-bold-gray" for="q2"><img src="images/tick2.svg" className="mr-2" width="20" height="20" />   2. What describes you the most in relateion to unlisted stocks ?</label>
                                <select class="form-control" id="q2">
                                    <option>yes</option>
                                    <option>no</option>
                                </select>
                            </div>
                            <div class="form-group mt-4">
                                <label className="p-16-20-bold-gray" for="q2"><img src="images/tick2.svg" className="mr-2" width="20" height="20" />   2. What describes you the most in relateion to unlisted stocks ?</label>
                                <select class="form-control" id="q2">
                                    <option>yes</option>
                                    <option>no</option>
                                </select>
                            </div>
                            <div class="form-group mt-4">
                                <label className="p-16-20-bold-gray" for="q2"><img src="images/tick2.svg" className="mr-2" width="20" height="20" />   2. What describes you the most in relateion to unlisted stocks ?</label>
                                <select class="form-control" id="q2">
                                    <option>yes</option>
                                    <option>no</option>
                                </select>
                            </div>
                            <div class="form-group mt-4">
                                <label className="p-16-20-bold-gray" for="q2"><img src="images/tick2.svg" className="mr-2" width="20" height="20" />   2. What describes you the most in relateion to unlisted stocks ?</label>
                                <select class="form-control" id="q2">
                                    <option>yes</option>
                                    <option>no</option>
                                </select>
                            </div>
                                
                        </form>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-end py-4">
                    <button className="btn btn-outline-dark btn-w180-h48 mr-2" >Cancel</button>
                    <button className="btn btn-solid-violet-white btn-w180-h48" >Update</button>
                </div>
            </div>
        </>
    )
}