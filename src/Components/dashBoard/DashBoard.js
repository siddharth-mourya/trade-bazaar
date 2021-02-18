import React from "react";
import DiscoverCompanies from "../discoverCompanies/DiscoverCompanies";
import InventoryTable from "../inventoryTable/InventoryTable";
import Navbar from "../navbar/Navbar";
import ProfileCompletion from "../profileCompletion/ProfileCompletion";
import SearchBar from "../searchBar/SearchBar";
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
                    <div className="rightcol col-lg-10 pl-4 pt-4 col-md-12">
                        <SearchBar />     
                        <br />
                        <InventoryTable />
                        <br />
                        <DiscoverCompanies />
                    
                        <br />
                    </div>
                             
                </div>
            </div>
        </ div>
    )
}