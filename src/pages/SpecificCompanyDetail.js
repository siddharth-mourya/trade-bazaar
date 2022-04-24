import React from "react";
import Navbar from "../Components/navbar/Navbar";
import SpecificCompany from "../Components/specificCompany/SpecificCompany";


export default function SpecificCompanyDetail()
{
    return(
        <>
            <Navbar navItem={"specific-company"}/>
            <SpecificCompany />
        </>
    )
}