import React from "react";
import FilterCompanies from "../filterCompanies/FilterCompanies";
import SearchBar from "../searchBar/SearchBar";
import "./companyWrapper.css";
import FollowedCompaniesCard from "../followedCompaniesCard/FollowedCompaniesCard";
import AddCompanyForm from "../addCompanyForm/AddCompany";

export default function FollowCompaniesWrapper()
{
    return(
        <>
            {/* modal */}
            <div id="modal_simple" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <h5 class="modal-title text-center mb-0">Add Company Request</h5>

                <div class="modal-body">
                    <AddCompanyForm />
                </div>
               
                </div>
            </div> 
            </div>


            {/* main content */}
            <div className=" companies-wrapper container-fluid p-0">
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
                        <div className="companies-list-wrapper mx-lg-2 mx-0 ">
                            <div className="d-flex flex-wrap pt-4 pl-4 pr-4 justify-content-between">
                                <p className="p-22-27-bold-gray">Companies <span>(10)</span></p>
                                <div className="d-flex">
                                    <button className="text-violet " data-toggle="modal" data-target="#modal_simple">Add a Company Request</button>
                                    <div class="dropdown ">
                                        <button class="btn btn-outline-secondary h-100 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Sort : <strong className="mr-2">A - Z </strong>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>

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

        </>
            
    )
}