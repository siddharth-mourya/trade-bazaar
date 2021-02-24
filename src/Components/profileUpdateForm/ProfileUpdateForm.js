import React , {useEffect , useState} from "react";
import "./profileUpdateForm.css";
import 'react-phone-number-input/style.css'
import PhoneInput  , { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'

export default function ProfileUpdateForm()
{

    const [value, setValue] = useState()
    let [phone ,setPhone] = useState('')
    useEffect(() => {
        setPhone(value)
        console.log("phone " , phone);
     }, [value])
     

    return(
        <>
        <p className="p-22-27-bold-gray pt-4 pl-4 pr-4 mb-0">Let's Add Personal Details</p>
            {/* container */}
            <div className="container-fluid px-4 py-3">
                <div className="row px-4">
                    <div className="col-lg-6 border-top col-md-12">
                        <form className=" profile-form py-4">
                        {/* profile section */}
                        <div className="d-flex align-items-center">
                            <img src="images/profile-pic.jpeg" width="70" height="70" className="rounded-circle" />
                            <div className="ml-2">
                                <p className="my-2 p-18-20-600-gray">Juila Robert</p>
                                <div className="pic-upload-div position-relative">
                                    <p className="p-14-17-500-violet">Change Profile Photo</p>
                                    <input type="file" name="profilepic" className="position-absolute " id="profilepic" />
                                </div>
                            </div>
                        </div>
                        <br />
                        {/*  */}
                        <div class="form-row">
                            <div class="col form-group">
                                <label for="name">Name *</label>
                                <input type="text" class="form-control" id="name" placeholder="Juila Robert" />
                            </div>
                            <div class="col form-group">
                                <label for="userid">User Id *</label>
                                <input type="text" class="form-control" id="userid" placeholder="Julia" />
                            </div>
                        </div>
                        <div class=" form-group align-items-center">
                            <label for="email">Email *</label>
                            <small className="float-right"> <img src="images/cross.svg" /> Not verified</small>
                            <input type="email" class="form-control " id="email" placeholder="Julia@email.com" />
                        </div>
                        <div class="alert alert-danger p-3" role="alert">
                            The verification link has been sent to your email, please verify. 
                            <br/>
                            <a href="#" class="alert-link">Verify Again</a>
                        </div>
                        <div class=" form-group">
                            <label for="phone">Phone *</label>
                            <small className="float-right"> <img src="images/cross.svg" /> Not verified</small>
                            <PhoneInput
                                id="phone"
                                defaultCountry="IN"
                                placeholder="9810140101"
                                international
                                value={value}
                                onChange={setValue}/>
                        </div>
                        <div class="alert alert-danger p-3" role="alert">
                            Verify your mobile number with otp
                            <br/>
                            <a href="#" class="alert-link">Verify Again</a>
                        </div>
                        {/* Notification via */}
                        <label for="notification">Get Notification Via</label>
                        <div id="notification" class="notification form-row ">
                            <div class="form-group col d-flex justify-content-between align-items-center">
                                <label for="customRadio2">Or toggle the second option</label>
                                <input type="radio" id="customRadio2" name="customRadio" class="form-control" />
                            </div>
                            <div class="form-group col  d-flex justify-content-between align-items-center ">
                                <label  for="customRadio1">Or toggle the second option</label>
                                <input type="radio" id="customRadio1" name="customRadio"  class="form-control" />
                            </div>
                        </div>
                        {/* dob */}
                        <div class=" form-group align-items-center mb-4">
                            <label for="dob">Date Of Birth *</label>
                            <input type="date" value="12/12/2020" class="form-control " id="dob"  />
                        </div>
                        <div class="form-group align-items-center">
                            <label for="father-name">Spouse/Father's Name (as per PAN ) *</label>
                            <input type="text" placeholder="Robert Downey" class="form-control " id="father-name"  />
                        </div>
                        <p className="p-22-27-bold-gray pt-4 pr-4 mb-0">Add Your Address Details</p>
                        <hr />
                        {/* address */}
                        <div class="form-group">
                            <label for="address">Address *</label>
                            <textarea class="form-control" id="address" rows="2"></textarea>
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
                    <div className="col-lg-6 profile-form-right-banner d-lg-block d-none ">
                        <div className="border ">
                            <img src="images/profile-phone-banner.svg" />
                            <p className="mt-3 mb-1 p-18-22-bold-gray">Why Phone number and E-mail id?</p>
                            <p className="p-14-17-500-gray">We feel this is one of the fastest ways
                                to communicate with you and update you with all the information about
                                your transaction and shortlisted companies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
           

    )
}