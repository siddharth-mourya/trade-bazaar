import React from "react";
import CompanyWrapper from "../Components/companyWrapper/CompanyWrapper";
import Navbar from "../Components/navbar/Navbar";

export default function Company()
{
    return(
        <>
            <Navbar navItem={"companies"} />
            <CompanyWrapper />
        </>
    )
}
