import React from "react";

export default function ProfileChangePassword()
{
    return(
        <>
             <div className="container-fluid px-4 py-3">
                <div className="row px-4 pt-2">
                    <img src="images/change-password-banner.svg" height="100"/>
                </div>
                <div className="row px-4 ">
                    <div className="col-lg-6 col-md-7 col-sm-12 py-2  border-md-right">
                        <br />
                        <p className="p-22-27-bold-gray mb-0 pb-2">Change password</p>
                        <form className=" profile-form pb-4">
                       
                        <div class="form-group">
                            <label for="opass">Old Password *</label>
                            <input type="password" class="form-control" id="opass" placeholder="" />
                        </div>
                        <div class="form-group">
                            <label for="npass">New Password *</label>
                            <input type="password" class="form-control" id="npass" placeholder="" />
                        </div>
                        <div class="form-group">
                            <label for="cnfpass">Confirm New Password *</label>
                            <input type="password" class="form-control" id="cnfpass" placeholder="" />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-outline-dark btn-w180-h48 mr-2" >Cancel</button>
                            <button className="btn btn-solid-violet-white btn-w180-h48" >Update</button>
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-12 d-flex align-items-center ">
                        <div className="change-password-check form-group">
                            <p id="letter" className="invalid p-14-17-500-gray"> <img src="/images/cross.svg" alt="dsf" />  Password must be 8 or more characters</p>
                            <p id="capital" className="invalid p-14-17-500-gray"> <img src="/images/cross.svg" alt="dsf" />  Password must contain 1 or more uppercase characters.</p>
                            <p id="number" className="invalid p-14-17-500-gray"> <img src="/images/cross.svg" alt="dsf" />  Password must contain 1 or more digit characters.</p>
                            <p id="length" className="invalid p-14-17-500-gray"> <img src="/images/cross.svg" alt="dsf" />  Password must contain 1 or more special characters.</p>
                                {/* <p id="letter" className="invalid"> 
                                    { no_of_char ? <img src="/images/tick.svg" alt="dsf" /> : <img src="/images/cross.svg" alt="dsf" /> }  Password must be 8 or more characters</p>
                                <p id="capital" className="invalid"> 
                                    { upper_case_letter ? <img src="/images/tick.svg" alt="dsf" /> : <img src="/images/cross.svg" alt="dsf" /> } Password must contain 1 or more uppercase characters.</p>
                                <p id="number" className="invalid">  
                                    { digit ? <img src="/images/tick.svg" alt="dsf" /> : <img src="/images/cross.svg" alt="dsf" /> } Password must contain 1 or more digit characters.</p>
                                <p id="length" className="invalid">  
                                    { special_char ? <img src="/images/tick.svg" alt="dsf" /> : <img src="/images/cross.svg" alt="dsf" /> }Password must contain 1 or more special characters.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}