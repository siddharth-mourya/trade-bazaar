import React from "react";
import DiscoverCompanies from "../discoverCompanies/DiscoverCompanies";
import InventoryTable from "../inventoryTable/InventoryTable";
import ProfileCompletion from "../profileCompletion/ProfileCompletion";
import SearchBar from "../searchBar/SearchBar";
import "./dashBoardWrapper.css";
import {v4 as uuidv4 } from 'uuid';
import NewsCard from "../NewsCard/NewsCard";

export default function dashBoardWrapper()
{
    return(
            <div className=" dashboard-wrapper container-fluid p-0">
                <div className="row m-0">
                    <div className="left-col col-lg-2 col-md-12 100vh py-4 d-lg-flex justify-content-center">
                        
                        {/* here jsx for timeline that is profile completion will be placed */}
                        <ProfileCompletion />
                           
                    </div>    
                    <div className="rightcol col-lg-10 pl-2 pt-4 col-md-12">
                        <SearchBar />     
                        <br />
                        <InventoryTable />
                        <br />
                        <DiscoverCompanies />
                        <br />

                        <div id ="dashboard_news_heading" className="pt-2 pb-4 pl-1 d-flex align-items-top justify-content-between">
                            <p className="text-bold-grey"> News Updates </p>
                            <button className="text-violet">View all</button>
                        </div>
                        <div id="dashboard_news" className="container">
                           
                            {/* {newsArray.map(news => (
                                    <Card 
                                    // readLater = {readLater}
                                    id={uuidv4()}
                                    key = {uuidv4()}
                                    description = {"WJKEFJRGENWDLKIOQUEGVEJHWKJEOIRUEGYHWJEBKEIWURGHBEJEHRI"}
                                    title = {"Fdojifhsbdkdla AFSD KFASJAFGDSFAAFDSGF ADS"}
                                    author={"hello"}
                                    imgurl = {"https://blog.mountainroseherbs.com/hs-fs/hubfs/NEWOWNERSHIP1%20copy.jpg?width=1260&name=NEWOWNERSHIP1%20copy.jpg"}
                                    />
                            ))} */}

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
                    
                        <br />
                    </div>
                             
                </div>
            </div>
    )
}