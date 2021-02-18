import React from "react";
import './inventoryTable.css'

export default function InventoryTable()
{
    return(

        <>
            <div id ="inventory_heading" className="pt-2 pb-4 pl-1 d-flex align-items-top justify-content-between">
                <p className="text-bold-grey"> Inventory </p>
                <button className="text-violet">View all</button>
            </div>
            <div id="inventory_table" class="table-responsive">
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