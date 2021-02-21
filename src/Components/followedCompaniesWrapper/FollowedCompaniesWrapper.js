import React from "react";
import FilterCompanies from "../filterCompanies/FilterCompanies";
import SearchBar from "../searchBar/SearchBar";
import "./followedCompaniesWrapper.css";
import FollowedCompaniesCard from "../followedCompaniesCard/FollowedCompaniesCard";

export default function FollowCompaniesWrapper()
{
    return(
            <div className=" follow-companies-wrapper container-fluid p-0">
                <div className="row m-0">
                    <div className="left-col col-lg-2 col-md-12 d-lg-flex p-0 m-0 justify-content-center">
                        
                        <div className="filter-wrapper my-4 mx-2 ">
                            <FilterCompanies />
                        </div>
                        {/* here jsx for timeline that is profile completion will be placed */}
                           
                    </div>    
                    <div className="rightcol col-lg-10 p-0 m-0  col-md-12">
                        <div className="searchBar-wrapper mt-4 mx-2">
                            <SearchBar />     
                        </div>

                        <br />
                        <div className="dicoverCompanies-wrapper mt-4 mx-lg-2 mx-0 ">
                            <div className="d-flex pt-4 pl-4 pr-4 justify-content-between">
                                <p className="p-22-27-bold-gray">WatchList Compaines <span>(10)</span></p>
                                <button className="text-violet">View all</button>
                            </div>
                            <div className="d-flex flex-wrap  p-4">
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                               <FollowedCompaniesCard />
                            </div>
                        </div>

                     
                    
                        <br />
                    </div>
                    {/* rigght col ends here */}
                             
                </div>
            </div>
    )
}