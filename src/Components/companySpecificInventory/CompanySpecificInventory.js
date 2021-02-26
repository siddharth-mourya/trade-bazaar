import React from "react";

import './companySpecificInventory.css'

export default function CompanySpecificInventory()
{
    return(

        <>
            <div id="company_specific_inventory_heading" className=" py-2 px-2 d-flex align-items-center justify-content-between">
                <p className="p-16-20-bold-gray mb-0">Inventory</p>
                <button className="text-violet btn-violet">View all</button>
            </div>
            <div id="company_specific_inventory_table" class="table-responsive px-2">
                <table class="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Inventory ID</th>
                        <th>Seller name</th>
                        <th>Qty</th>
                        <th>Price/Share</th>
                        <th>Date & Time</th>
                        <th>Negotiable</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex"> 
                                <img src="/images/sun-pharma.svg"  className="mr-3"/> 
                                <div>
                                    <span className="company_name_table">Sun Pharma</span>
                                    <span>Palm tree</span>
                                    <span>Lno019833</span>
                                </div>
                            </div>
                        
                        </td>
                        <td>1234589</td>
                        <td>John Doe</td>
                        <td>13</td>
                        <td>1000</td>
                        <td>9 Oct 2020, 02:00 PM</td>
                        <td>yes</td>
                        <td>Negotiate</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex"> 
                                <img src="/images/sun-pharma.svg"  className="mr-3"/> 
                                <div>
                                    <span className="company_name_table">Sun Pharma</span>
                                    <span>Palm tree</span>
                                    <span>Lno019833</span>
                                </div>
                            </div>
                        
                        </td>
                        <td>1234589</td>
                        <td>John Doe</td>
                        <td>13</td>
                        <td>1000</td>
                        <td>9 Oct 2020, 02:00 PM</td>
                        <td>yes</td>
                        <td>Negotiate</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex"> 
                                <img src="/images/sun-pharma.svg"  className="mr-3"/> 
                                <div>
                                    <span className="company_name_table">Sun Pharma</span>
                                    <span>Palm tree</span>
                                    <span>Lno019833</span>
                                </div>
                            </div>
                        
                        </td>
                        <td>1234589</td>
                        <td>John Doe</td>
                        <td>13</td>
                        <td>1000</td>
                        <td>9 Oct 2020, 02:00 PM</td>
                        <td>yes</td>
                        <td>Negotiate</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex"> 
                                <img src="/images/sun-pharma.svg"  className="mr-3"/> 
                                <div>
                                    <span className="company_name_table">Sun Pharma</span>
                                    <span>Palm tree</span>
                                    <span>Lno019833</span>
                                </div>
                            </div>
                        
                        </td>
                        <td>1234589</td>
                        <td>John Doe</td>
                        <td>13</td>
                        <td>1000</td>
                        <td>9 Oct 2020, 02:00 PM</td>
                        <td>yes</td>
                        <td>Negotiate</td>
                    </tr>
                
                </tbody>
            </table>
        </div>

        </>
      
    )
}