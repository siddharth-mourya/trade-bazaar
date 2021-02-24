import React , {useEffect , useState} from "react";
import "./profileWrapper.css";
import ProfileUpdateForm from "../profileUpdateForm/ProfileUpdateForm";
import ProfileTradeReadySteps from "../profileTradeReadySteps/ProfileTradeReadySteps";

export default function ProfileWrapper()
{
    // for side category to collapse
    let [resized , setResized ] = useState({})

    
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
      }
    function handleResize()
    {
        let str = getWindowDimensions()
        setResized(str)
    }
    useEffect(() => {
       
        window.addEventListener('resize', handleResize);

        let size = getWindowDimensions();
        console.log("size ",size );
        if(size.width > 991)
        {
            console.log("in here");
            document.getElementById("profile-categories").classList.add('show')
            document.getElementById("category-toggle-btn").classList.remove('py-2')
            document.getElementById("category-toggle-btn").classList.add('py-3')
            document.getElementsByClassName("profile-category-wrapper")[0].style.margin="15px"
            document.getElementsByClassName("profile-breadcrumbs")[0].style.marginTop="20px"
            document.getElementsByClassName("profile-wrapper")[0].getElementsByClassName("rightcol")[0].classList.remove('px-2')
        }
        else{
            document.getElementById("profile-categories").classList.remove('show')
            document.getElementById("category-toggle-btn").classList.remove('py-3')
            document.getElementById("category-toggle-btn").classList.add('py-2')
            document.getElementsByClassName("profile-category-wrapper")[0].style.margin="5px"
            document.getElementsByClassName("profile-breadcrumbs")[0].style.marginTop="5px"
            document.getElementsByClassName("profile-wrapper")[0].getElementsByClassName("rightcol")[0].classList.add('px-1')
        }
        
        return () => window.removeEventListener('resize', handleResize);
}

, [resized]);


 
    return(
        <>
        
        
        {/* profile wrapper */}
            <div className=" profile-wrapper container-fluid p-0">
                <div className="row m-0">
                    <div className="left-col col-lg-2 col-md-12 d-lg-flex p-0 m-0 ">

                        <div className="profile-category-wrapper">
                            <p id="category-toggle-btn" className="p-16-20-bold-gray px-3 border-bottom py-3 mb-0" data-toggle="collapse" href="#profile-categories" role="button" aria-expanded="false" aria-controls="profile-categories">Profile  <i className="fa fa-chevron-circle-down float-right" /></p>
                      
                            <div id="profile-categories" className="collapse">
                                <div class="list-group" id="list-tab"  role="tablist">
                                    <a class="list-group-item list-group-item-action active" id="personal-details-list" data-toggle="list" href="#personal-details" role="tab" aria-controls="home">Personal Details</a>
                                    <a class="list-group-item list-group-item-action" id="trade-ready-steps-list" data-toggle="list" href="#trade-ready-steps" role="tab" aria-controls="profile">Trade Ready Steps</a>
                                    <a class="list-group-item list-group-item-action" id="risk-profile-list" data-toggle="list" href="#risk-profile" role="tab" aria-controls="messages">Risk Profiles</a>
                                    <a class="list-group-item list-group-item-action" id="add-company-list" data-toggle="list" href="#add-company" role="tab" aria-controls="settings">Add Company</a>
                                    <a class="list-group-item list-group-item-action" id="change-password-list" data-toggle="list" href="#change-password" role="tab" aria-controls="settings">Change password</a>
                                </div>
                            </div>
                        </div>
                      
                           
                    </div> 

                    <div className="rightcol col-lg-10 p-0 m-0  col-md-12">
                        {/* breadcrumb start */}
                        <div className="profile-breadcrumbs">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb pl-0 pt-0 align-items-center">
                                    <li class="breadcrumb-item "><a href="#"><img src="images/home-icon.svg" /></a></li>
                                    <li class="breadcrumb-item"><a href="#" className=" p-16-20-600-violet">Library</a></li>
                                    <li class="breadcrumb-item active"><a href="#" className=" p-16-20-600-violet">Data </a></li>
                                </ol>
                            </nav>    
                        </div>
                        {/* breadcrumb ends */}


                        <div className="profile-content-wrapper bg-white mx-lg-2 mx-0 ">
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="personal-details" role="tabpanel" aria-labelledby="personal-details-list">
                                    <ProfileUpdateForm />
                                </div>
                                <div class="tab-pane fade" id="trade-ready-steps" role="tabpanel" aria-labelledby="trade-ready-steps-list">
                                    <ProfileTradeReadySteps />
                                </div>
                                <div class="tab-pane fade" id="risk-profile" role="tabpanel" aria-labelledby="risk-profile-list">...</div>
                                <div class="tab-pane fade" id="add-company" role="tabpanel" aria-labelledby="add-company-list">...</div>
                                <div class="tab-pane fade" id="change-password" role="tabpanel" aria-labelledby="change-password-list">...</div>
                            </div>
                        </div>

                   

                    <br />
                    </div>
                    {/* right col ends here */}
                             
                </div>
            </div>
        </>
           
    )
}