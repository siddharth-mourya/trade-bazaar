import React from "react";

export default function ProfileChangePassword()
{
    return(
        <>
             <div className="container-fluid px-4 py-3">
                <div className="row px-4 py-4">
                    <div className="col-lg-6 col-md-12">
                        <p className="p-22-27-bold-gray border-bottom mb-4 pb-2">Add company</p>
                        <form className=" profile-form pb-4">
                       
                        <div class="form-group">
                            <label for="cname">Company Name *</label>
                            <input type="text" class="form-control" id="cname" placeholder="Juila Robert ltd." />
                        </div>
                        <div class="form-group">
                            <label for="gstin">GSTIN Number *</label>
                            <input type="text" class="form-control" id="gstin" placeholder="1324544" />
                        </div>
                     
                        {/* address */}
                        
                        <div class="form-group">
                            <label for="caddress">Company Address *</label>
                            <textarea class="form-control" id="acddress" rows="2"></textarea>
                        </div>
                        {/*  */}
                        <div class="form-row">
                            <div class="col form-group">
                                <label for="country">Country</label>
                                <select class="form-control" id="country">
                                    <option>India</option>
                                    <option>Something</option>
                                    <option>America</option>
                                    <option>Texas</option>
                                    <option>UK</option>
                                </select>
                            </div>
                            <div class="col form-group">
                                <label for="country">City</label>
                                <select class="form-control" id="country">
                                    <option>Bhopal</option>
                                    <option>Indore</option>
                                    <option>Mumbai</option>
                                    <option>Delhi</option>
                                    <option>Raipur</option>
                                </select>
                            </div>
                        </div>
                        {/*  */}
                        <div class="form-row">
                            <div class="col form-group">
                                <label for="state">State *</label>
                                <input type="text" class="form-control" id="state" placeholder="Maharashtra" />
                            </div>
                            <div class="col form-group">
                                <label for="pincode">User Id *</label>
                                <input type="number" class="form-control" id="pincode" placeholder="463987" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-outline-dark btn-w180-h48 mr-2" >Cancel</button>
                            <button className="btn btn-solid-violet-white btn-w180-h48" >Update</button>
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-6 add-company-banner d-lg-block d-none ">
                        <div className="border ">
                            <img src="images/add_company_banner.svg" />
                            <p className="mt-3 mb-1 p-18-22-bold-gray">Why need to add company details?</p>
                            <p className="p-14-17-500-gray">These details are required if you want a Invoice Bill
                                    on your company name.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}