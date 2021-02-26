import React from "react";
import DashBoardWrapper from "../Components/dashBoardWrapper/DashBoardWrapper";
import Navbar from "../Components/navbar/Navbar";

export default function DashBoard()
{
    return(
        <>
            <Navbar navItem={"dashboard"} />
            <DashBoardWrapper />
        </>
    )
}