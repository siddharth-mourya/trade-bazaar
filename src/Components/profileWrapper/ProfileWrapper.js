import React from "react";
import "./profileWrapper.css";

export default function ProfileWrapper()
{
    return(
            <div className=" profile-wrapper container-fluid p-0">
                <div className="row m-0">
                    <div className="left-col col-lg-2 col-md-12 d-lg-flex p-0 m-0 justify-content-center">
                        
                        <div className="profile-category-wrapper my-4 mx-2 ">
                            Category
                        </div>
                           
                    </div> 

                    <div className="rightcol col-lg-10 p-0 m-0  col-md-12">
                        {/* breadcrumb start */}
                        <div className="profile-breadcrumbs mt-4 mx-2">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb pl-0 pt-0 align-items-center">
                                    <li class="breadcrumb-item "><a href="#"><img src="images/home-icon.svg" /></a></li>
                                    <li class="breadcrumb-item"><a href="#" className=" p-16-20-600-violet">Library</a></li>
                                    <li class="breadcrumb-item active"><a href="#" className=" p-16-20-600-violet">Data </a></li>
                                </ol>
                            </nav>    
                        </div>
                        {/* breadcrumb ends */}

                        {/* main content */}
                        <div className="profile-content-wrapper bg-white mx-lg-2 mx-0 ">
                            <p className="p-22-27-bold-gray pt-4 pl-4 pr-4 mb-0">WatchList Compaines <span>(10)</span></p>
                            <div className="container-fluid px-4 py-3">
                                <div className="row px-3">
                                    <div className="col-lg-6 border-top col-md-12 bg-light">
                                            <form className="profile-form py-4 px-2">
                                                <div className="d-flex">
                                                    <img src="images/profile-pic.jpeg" width="70" height="70" className="rounded-circle" />
                                                    <div>
                                                        <p className="my-2 ">Juila Robert</p>
                                                        <div className="pic-upload-div">
                                                            <p>Change Photo</p>
                                                            <input type="file" name="profilepic" id="profilepic" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                    </div>
                                    <div className="col-lg-6 d-lg-block d-none bg-dark">
                                            sub right
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* main content ends */}

                    <br />
                    </div>
                    {/* right col ends here */}
                             
                </div>
            </div>
    )
}