import React from "react";
import './discoverCompanies.css'

export default function DiscoverCompanies()
{
    return(
         
        <div id="discover_companies_wrapper" className="pl-4 pt-4 discover_companies_wrapper">
            <div className="d-flex justify-content-between">
                <p> Discover Compaines</p>
                <button className="text-violet mr-3">View all</button>
            </div>
            <div className="d-flex pb-4 overflow-auto">
                
                <div class="card bg-light mr-3 companycard" >
                    <div class="card-header d-flex px-2 justify-content-between align-items-center">
                        <div className="d-flex flex-wrap"> 
                            <img src="/images/sun-pharma.svg"  className="mr-1"/> 
                            <div>
                                <span className="company_name">Sun Pharma</span>
                                <span>Palm tree</span>
                                <span>Lno019833</span>
                            </div>
                        </div>
                        <img className="" src="/images/plus-sign.svg"/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card bg-light mr-3 companycard" >
                    <div class="card-header d-flex px-2 justify-content-between align-items-center">
                        <div className="d-flex flex-wrap"> 
                            <img src="/images/sun-pharma.svg"  className="mr-1"/> 
                            <div>
                                <span className="company_name">Sun Pharma</span>
                                <span>Palm tree</span>
                                <span>Lno019833</span>
                            </div>
                        </div>
                        <img className="" src="/images/plus-sign.svg"/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card bg-light mr-3 companycard" >
                    <div class="card-header d-flex px-2 justify-content-between align-items-center">
                        <div className="d-flex flex-wrap"> 
                            <img src="/images/sun-pharma.svg"  className="mr-1"/> 
                            <div>
                                <span className="company_name">Sun Pharma</span>
                                <span>Palm tree</span>
                                <span>Lno019833</span>
                            </div>
                        </div>
                        <img className="" src="/images/plus-sign.svg"/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card bg-light mr-3 companycard" >
                    <div class="card-header d-flex px-2 justify-content-between align-items-center">
                        <div className="d-flex flex-wrap"> 
                            <img src="/images/sun-pharma.svg"  className="mr-1"/> 
                            <div>
                                <span className="company_name">Sun Pharma</span>
                                <span>Palm tree</span>
                                <span>Lno019833</span>
                            </div>
                        </div>
                        <img className="" src="/images/plus-sign.svg"/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="p-3"></div>
                
            </div>
        </div>
    )
}