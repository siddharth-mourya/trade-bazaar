import React from "react";

export default function AddCompanyForm()
{
    return(
        <>
            <form className=" profile-form py-4">
                        <div class="form-group align-items-center">
                            <label for="company_name">Company Name *</label>
                            <input type="text" placeholder="Robert Downey" class="form-control " id="company_name"  />
                        </div>
                        <div class="form-group">
                            <label for="comment">Comment *</label>
                            <textarea class="form-control" id="comment" rows="2"></textarea>
                        </div>
                       
                        {/* Stocks via */}
                        <label for="stocks">Do you buy these stocks*</label>
                        <div id="notification" class="notification form-row ">
                            <div class="form-group col d-flex justify-content-between align-items-center">
                                <label for="stocks_buy_yes">Yes</label>
                                <input type="radio" id="stocks_buy_yes" name="stocks_buy_yes" class="form-control" />
                            </div>
                            <div class="form-group col  d-flex justify-content-between align-items-center ">
                                <label  for="stocks_buy_no">No</label>
                                <input type="radio" id="stocks_buy_no" name="stocks_buy_no"  class="form-control" />
                            </div>
                        </div>

                         {/* Notification via */}
                         <label for="stocks">Do you have stocks of this Company*</label>
                        <div id="notification" class="notification form-row ">
                            <div class="form-group col d-flex justify-content-between align-items-center">
                                <label for="stocks_yes">Yes</label>
                                <input type="radio" id="stocks_yes" name="stocks_yes" class="form-control" />
                            </div>
                            <div class="form-group col  d-flex justify-content-between align-items-center ">
                                <label  for="stocks_no">No</label>
                                <input type="radio" id="stocks_no" name="stocks_no"  class="form-control" />
                            </div>
                        </div>

                    <p ><strong>Note : </strong>Send documents related to company <span className="text-violet">info@unlistedassets.com</span> </p>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-dark btn-w180-h48 mr-2" >Cancel</button>
                            <button className="btn btn-solid-violet-white btn-w180-h48" >Submit</button>
                        </div>
                </form>

        </>
    )
}