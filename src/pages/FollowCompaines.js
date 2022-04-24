import React from "react";
import FollowedCompaniesWrapper from "../Components/followedCompaniesWrapper/FollowedCompaniesWrapper";
import Navbar from "../Components/navbar/Navbar";

export default function FollowCompanies()
{
    return(
        <>
            <Navbar navItem={'followed-companies'} />
            <FollowedCompaniesWrapper />
        </>
    )
}