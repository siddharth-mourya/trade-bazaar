import React from "react";
import Navbar from "../Components/navbar/Navbar";
import SpecificCompany from "../Components/specificCompany/SpecificCompany";


export default function Profile()
{
    return(
        <>
            <Navbar navItem={"companies"}/>
            <SpecificCompany />
        </>
    )
}