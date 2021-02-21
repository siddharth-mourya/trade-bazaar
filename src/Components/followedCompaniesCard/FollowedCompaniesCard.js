import React from "react";
import "./followedCompaniesCard.css";

export default function FollowedCompaniesCard()
{
    return(
        <>
        {/* Card */}
        <div class="card bg-light m-2 followed_company_card" >
            <div class="card-header d-flex px-2 justify-content-between align-items-center">
                <div className="d-flex flex-wrap"> 
                    <img src="/images/sun-pharma.svg"  className="mr-1"/> 
                    <div>
                        <p className="p-16-20-bold-gray mb-0">Sun Pharma</p>
                        <span>Palm tree</span>
                        <span>Lno019833</span>
                    </div>
                </div>
                <img className="" src="/images/minus-sign.svg"/>
            </div>
            <div class="card-body position-relative p-2">
                {/* on hover window starts */}
                <div className="position-absolute justify-content-center flex-column align-items-center hover-window">
                    <button className="text-white mb-2">Trade</button>
                    <a href="/explore" className="p-12-15-500-gray">Explore</a>
                </div>
                {/* on hover window ends */}
                <div className="d-flex justify-content-between">
                    <p className="p-14-17-500-gray mb-2" >Valuation</p>
                    <p className="p-14-17-bold-gray mb-2">2909.06</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="p-14-17-500-gray mb-2" >Series Of Funding</p>
                    <p className="p-14-17-bold-gray mb-2">Series A</p>
                </div>
                <p class="p-14-17-500-gray mt-3"> 
                Sun Pharmaceutical Industries Limited is an Indian multinational pharmaceutical company headquartered in Mumbai, Maharashtra.
                </p>
            </div>
        </div>
        </>

    )

}