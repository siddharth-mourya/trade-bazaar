import React from "react";
import Navbar from "../navbar/Navbar";
import ProfileCompletion from "../profileCompletion/ProfileCompletion";
import "./dashBoard.css";

export default function DashBoard()
{
    return(
        <div className="dashboard-wrapper h-100">
            <Navbar />
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="left-col col-lg-2 100vh py-4 d-lg-flex d-none justify-content-center">
                        
                        {/* here jsx for timeline that is profile completion will be placed */}
                        <ProfileCompletion />
                           
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </ div>
    )
}