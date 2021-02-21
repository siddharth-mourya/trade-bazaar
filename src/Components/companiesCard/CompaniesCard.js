import React from "react";
import "./companiesCard.css";

export default function CompaniesCard()
{
    return(
        <div class="card bg-light m-2 companycard" >
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
    )

}