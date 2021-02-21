import React from "react";
import {v4 as uuidv4 } from 'uuid';
import NewsCard from "../NewsCard/NewsCard";
import "./newsWrapper.css";

export default function NewsWrapper()
{
    return(
        <>
            <div className="container-lg container-fluid-md container-fluid-sm">
                <p className="p-22-27-bold-gray p-2 pt-4 mb-0"> News Updates </p>    
               
                                    <NewsCard
                                        id={uuidv4()}
                                        key = {uuidv4()}
                                        description = {"Watch this edition of Ideas For Profit with Moneycontrol's Sakshi Batra to know how HDFC Bank has managed to stay on top of the game amid an imminent change in leadership and the uncertain economic scenario and whether that makes it a potential re-rating candidate"}
                                        title = {"Ideas For Profit | HDFC Bank Q2: Could it trigger re-rating of the stock?"}
                                        author={"19 Oct 2020, 02:36 PM"}
                                        imgurl = {"https://blog.mountainroseherbs.com/hs-fs/hubfs/NEWOWNERSHIP1%20copy.jpg?width=1260&name=NEWOWNERSHIP1%20copy.jpg"}
                                        />
                                     <NewsCard 
                                        id={uuidv4()}
                                        key = {uuidv4()}
                                        description = {"Watch this edition of Ideas For Profit with Moneycontrol's Sakshi Batra to know how HDFC Bank has managed to stay on top of the game amid an imminent change in leadership and the uncertain economic scenario and whether that makes it a potential re-rating candidate"}
                                        title = {"Ideas For Profit | HDFC Bank Q2: Could it trigger re-rating of the stock?"}
                                        author={"19 Oct 2020, 02:36 PM"}
                                        imgurl = {"https://blog.mountainroseherbs.com/hs-fs/hubfs/NEWOWNERSHIP1%20copy.jpg?width=1260&name=NEWOWNERSHIP1%20copy.jpg"}
                                        />
                
            </div>
        </>
    )
}