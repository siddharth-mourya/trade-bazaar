import React , {useEffect , useState} from "react";
import "./profileTradeReadySteps.css";
import 'react-phone-number-input/style.css'
import PhoneInput  , { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'

export default function ProfileTradeReadySteps()
{

    const [value, setValue] = useState()
    let [phone ,setPhone] = useState('')
    useEffect(() => {
        setPhone(value)
        console.log("phone " , phone);
     }, [value])
     

    return(
        <>
            <div className="nav flex-nowrap trs-tabs d-flex pt-sm-4 pl-sm-4 pr-sm-4 justify-content-between border-bottom overflow-auto" id="myTab" role="tablist">
               <a className="nav-link text-decoration-none pb-2 mx-md-2" id="choose_role_tab" data-toggle="tab" href="#choose_role" role="tab" aria-controls="choose_role" aria-selected="true"> <span className="" >1</span> Choose Role</a>
               <a className="nav-link text-decoration-none pb-2 mx-md-2" id="bank_account_tab" data-toggle="tab" href="#bank_account" role="tab" aria-controls="bank_account" aria-selected="false">Bank Account</a>
               <a className="nav-link text-decoration-none pb-2 mx-md-2" id="demant_account_tab" data-toggle="tab" href="#demant_account" role="tab" aria-controls="demant_account" aria-selected="false">Demant Account</a>
               <a className="nav-link text-decoration-none pb-2 mx-md-2" id="nsdl_active_account_tab" data-toggle="tab" href="#nsdl_active_account" role="tab" aria-controls="nsdl_active_account" aria-selected="false">NSDL Active Account</a>
               <a className="nav-link text-decoration-none pb-2 mx-md-2" id="pan_kyc_verification_tab" data-toggle="tab" href="#pan_kyc_verification" role="tab" aria-controls="pan_kyc_verification" aria-selected="false">PAN KYC Verification</a>
               <a className="nav-link text-decoration-none pb-2 mx-md-2" id="aadhar_link_tab" data-toggle="tab" href="#aadhar_link" role="tab" aria-controls="aadhar_link" aria-selected="false">Aadhar Link</a>
            </div>
            <div class="tab-content" id="trs-content">
                <div class="tab-pane fade show active" id="choose_role" role="tabpanel" aria-labelledby="choose_role_tab">
                    <div className="container-fluid px-4 py-4"> 
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <form className=" trs1-form">
                            
                                {/* who are u */}
                                <label for="role" className="p-22-20-bold-gray mb-4" >Who are you ? *</label>
                                <div id="role" class="role form-row ">
                                    <div class="form-group col-12 d-flex justify-content-between align-items-center">
                                        <label for="resident-indian">Resident Indian</label>
                                        <input type="radio" id="resident-indian" name="customRadio" class="form-control" />
                                    </div>
                                    <div class="form-group col-12  d-flex justify-content-between align-items-center ">
                                        <label  for="non-resident-indian">Non Resident Indian</label>
                                        <input type="radio" id="non-resident-indian" name="customRadio"  class="form-control" />
                                    </div>
                                    <div class="form-group col-12  d-flex justify-content-between align-items-center ">
                                        <label  for="non-indian">Non Indian</label>
                                        <input type="radio" id="non-indian" name="customRadio"  class="form-control" />
                                    </div>
                                </div>
                            
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-outline-dark btn-w180-h48 mr-2" >Cancel</button>
                                    <button className="btn btn-solid-violet-white btn-w180-h48" >Update</button>
                                </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 trs-form-right-banner d-lg-block d-md-block d-none ">
                                <div className="border ">
                                    <img src="images/trs1-banner.svg" />
                                    <p className="mt-3 mb-1 p-18-22-bold-gray">Why Bank account  details?</p>
                                    <p className="p-14-17-500-gray">Since we don’t like holding your money for long time.
                                    Your Bank account details will help us to transfer your money back to you
                                    seamlessly in case transaction gets cancelled or disputed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="bank_account" role="tabpanel" aria-labelledby="bank_account_tab" >
                    <div className="container-fluid px-4 py-4"> 
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <form className=" trs2-form">
                            
                                {/* Add account details*/}
                                <label for="role" className="p-22-20-bold-gray mb-4" >Add your Bank Account *</label>

                                <div class="form-group">
                                    <label className="p-14-20-500-gray" for="account_number">Account Number</label>
                                    <input type="text" class="form-control" id="account_number" placeholder="19203404430" />
                                </div>
                                <div  class="form-group">
                                    <label className="p-14-20-500-gray" for="confirm_account_number">Confirm Account Number *</label>
                                    <input type="text" class="form-control" id="confirm_account_number" placeholder="19203404430" />
                                </div>
                                <div class="form-group">
                                    <label className="p-14-20-500-gray" for="ifsc_code">IFSC Code *</label>
                                    <input type="text" class="form-control" id="ifsc_code" placeholder="SBIN00110989" />
                                </div>
                                <div class="form-group">
                                    <label className="p-14-20-500-gray" for="bank_name">Bank Name *</label>
                                    <input type="text" class="form-control" id="bank_name" placeholder="State Bank Of India" />
                                </div>
                                <div class="form-group">
                                    <label  className="p-14-20-500-gray" for="branch_name">Branch Name *</label>
                                    <select class="form-control" id="branch_name">
                                        <option>Bhopal</option>
                                        <option>Indore</option>
                                        <option>Mumbai</option>
                                        <option>Delhi</option>
                                        <option>Raipur</option>
                                    </select>
                                </div>
                                                           
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-outline-dark btn-w180-h48 mr-2" >Previous</button>
                                    <button className="btn btn-solid-violet-white btn-w180-h48" >Update</button>
                                </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 trs-form-right-banner d-lg-block d-md-block d-none ">
                                <div className="border ">
                                    <img src="images/trs1-banner.svg" />
                                    <p className="mt-3 mb-1 p-18-22-bold-gray">Why Bank account  details?</p>
                                    <p className="p-14-17-500-gray">Since we don’t like holding your money for long time.
                                    Your Bank account details will help us to transfer your money back to you
                                    seamlessly in case transaction gets cancelled or disputed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="demant_account" role="tabpanel" aria-labelledby="demant_account_tab" >
                    <div className="container-fluid px-4 py-4"> 
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <form className=" trs3-form">
                            
                                {/* Add Demant details*/}
                                <label for="role" className="p-22-20-bold-gray mb-4" >Add Your Demant Account *</label>
                                <div class="form-group">
                                    <label className="p-14-20-500-gray" for="demat_id">Demat ID</label>
                                    <input type="number" class="form-control" id="demat_id" placeholder="19203404430" />
                                </div>
                                <div  class="form-group">
                                    <label className="p-14-20-500-gray" for="confirm_demat_id">Confirm Demaat ID *</label>
                                    <input type="text" class="form-control" id="confirm_demat_id" placeholder="19203404430" />
                                </div>
                                <div class="form-group">
                                    <label className="p-14-20-500-gray" for="dp_id">DP Id *</label>
                                    <input type="text" class="form-control" id="dp_id" placeholder="SBIN00110989" />
                                </div>
                                <div class="form-group">
                                    <label className="p-14-20-500-gray" for="bo_id">BO ID *</label>
                                    <input type="text" class="form-control" id="bo_id" placeholder="State Bank Of India" />
                                </div>
                                <div class="form-group">
                                    <label  className="p-14-20-500-gray" for="depository_name">Despository Name *</label>
                                    <select class="form-control" id="depository_name">
                                        <option>CDSL</option>
                                        <option>NSDL</option>
                                        <option>Mumbai</option>
                                        <option>Delhi</option>
                                        <option>Raipur</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label className="p-14-20-500-gray" for="broker_name">Broker Name *</label>
                                    <input type="text" class="form-control" id="broker_name" placeholder="Rajesh Khanna" />
                                </div>         
                                       
                                <div className="d-flex justify-content-end align-items-center">
                                    <a className="p-14-20-500-gray mr-auto"><u>I want to skip</u></a>
                                    <button className="btn btn-outline-dark btn-w180-h48 mr-2" >Previous</button>
                                    <button className="btn btn-solid-violet-white btn-w180-h48" >Update</button>
                                </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 trs-form-right-banner d-lg-block d-md-block d-none ">
                                <div className="border ">
                                    <img src="images/demat-right-banner.svg" />
                                    <p className="mt-3 mb-1 p-18-22-bold-gray">Why Bank account  details?</p>
                                    <p className="p-14-17-500-gray">Since we don’t like holding your money for long time.
                                    Your Bank account details will help us to transfer your money back to you
                                    seamlessly in case transaction gets cancelled or disputed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nsdl_active_account" role="tabpanel" aria-labelledby="nsdl_active_account_tab" >
                    <div className="container-fluid px-4 py-4"> 
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <form className=" trs4-form">
                            
                                {/*NSDL active account */}
                                <p className="p-22-20-bold-gray mb-4" >NSDL Active Account *</p> 
                                <label for="role" className="p-14-20-500-gray " >Add your Special/CDSL or DIS Process *</label>
                                <div id="role" class="role form-row ">
                                    <div class="form-group col-12  d-flex justify-content-between align-items-center ">
                                        <label className="p-14-20-500-gray "  for="speed_ensdl">Speed-E-NSDL *</label>
                                        <input type="radio" id="speed_ensdl" name="customRadio"  class="form-control" />
                                    </div>
                                    <div class="form-group col-12  d-flex justify-content-between align-items-center ">
                                        <label className="p-14-20-500-gray "  for="csdl">CSDL</label>
                                        <input type="radio" id="csdl" name="customRadio"  class="form-control" />
                                    </div>
                                    <div class="form-group col-12  d-flex justify-content-between align-items-center ">
                                        <label className="p-14-20-500-gray "  for="dis_process">DIS Process</label>
                                        <input type="radio" id="dis_process" name="customRadio"  class="form-control" />
                                    </div>
                                    <div class="form-group col-12  d-flex justify-content-between align-items-center ">
                                        <label className="p-14-20-500-gray "  for="e_dis_process">E-DIS Process</label>
                                        <input type="radio" id="e_dis_process" name="customRadio"  class="form-control" />
                                    </div>
                                </div>
                                                        
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-outline-dark mr-2" >Previous</button>
                                    <button className="btn btn-solid-violet-white " >Save & Continue</button>
                                </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 trs-form-right-banner d-lg-block d-md-block d-none ">
                                <div className="border ">
                                    <img src="images/pan_right_banner.svg" />
                                    <p className="mt-3 mb-1 p-18-22-bold-gray">Why Bank account  details?</p>
                                    <p className="p-14-17-500-gray">Since we don’t like holding your money for long time.
                                    Your Bank account details will help us to transfer your money back to you
                                    seamlessly in case transaction gets cancelled or disputed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pan_kyc_verification" role="tabpanel" aria-labelledby="pan_kyc_verification_tab" >
                    <div className="container-fluid px-4 py-4"> 
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <form className=" trs4-form">
                            
                                {/* who are u */}
                                <label for="role" className="p-22-20-bold-gray mb-4" >PAN KYC Verification *</label>
                                <div class="form-group">
                                <label className="p-14-20-500-gray " for="pan_number">Pan Number</label>
                                    <input type="text" class="form-control" id="pan_number" placeholder="DUIRO574445" />
                                </div>
                            
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-outline-dark  mr-2" >Previous</button>
                                    <button className="btn btn-solid-violet-white" >Save & continue</button>
                                </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 trs-form-right-banner d-lg-block d-md-block d-none ">
                                <div className="border ">
                                    <iframe src="https://www.youtube.com/embed/DcqJvYF1ewA" frameborder="0" allowfullscreen></iframe>
                                    <p className="mt-3 mb-1 p-18-22-bold-gray">Why Bank account  details?</p>
                                    <p className="p-14-17-500-gray">Since we don’t like holding your money for long time.
                                    Your Bank account details will help us to transfer your money back to you
                                    seamlessly in case transaction gets cancelled or disputed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="aadhar_link" role="tabpanel" aria-labelledby="aadhar_link_tab" >
                    <div className="container-fluid px-4 py-4"> 
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <form className=" trs4-form">
                            
                                {/*NSDL active account */}
                                <p className="p-22-20-bold-gray mb-4" >Aadhar Linked *</p> 
                                <label for="role" className="p-14-20-500-gray " >Is your aadhar linked to your phone ?*</label>
                                <div id="role" class="role form-row ">
                                    <div class="form-group col  d-flex justify-content-between align-items-center ">
                                        <label className="p-14-20-500-gray "  for="aadhar_yes">YES *</label>
                                        <input type="radio" id="aadhar_yes" name="customRadio"  class="form-control" />
                                    </div>
                                    <div class="form-group col  d-flex justify-content-between align-items-center ">
                                        <label className="p-14-20-500-gray "  for="aadhar_no">NO</label>
                                        <input type="radio" id="aadhar_no" name="customRadio"  class="form-control" />
                                    </div>
                                </div>
                                <div className="d-flex bg-gray  p-3 rounded align-items-center w-sm-100 w-75 mb-2">
                                    <img src="images/warning_yellow.svg"  className="mr-2"/>
                                    <p className="text-white mb-0 p-12-15-500-gray" > <strong>Note: </strong>Your agreement will be signed using Aadhar based OTP verification. Please keep 
                                        your mobile phone ready, which is linked to your Aadhar card.</p>      
                                </div>
                                   
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-outline-dark mr-2" >Previous</button>
                                    <button className="btn btn-solid-violet-white " >Done</button>
                                </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 trs-form-right-banner d-lg-block d-md-block d-none ">
                                <div className="border ">
                                    <img src="images/aadhar_right_banner.svg" />
                                    <p className="mt-3 mb-1 p-18-22-bold-gray">Why Bank account  details?</p>
                                    <p className="p-14-17-500-gray">Since we don’t like holding your money for long time.
                                    Your Bank account details will help us to transfer your money back to you
                                    seamlessly in case transaction gets cancelled or disputed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>

            </div>

            {/* container */}
           
        </>
           

    )
}