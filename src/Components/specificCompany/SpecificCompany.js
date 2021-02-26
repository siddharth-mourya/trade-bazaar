import React from 'react';
import CompanySpecificInventory from '../companySpecificInventory/CompanySpecificInventory';
import {v4 as uuidv4 } from 'uuid';
import "./specificCompany.css";
import CompanySpecificNewsCard from '../companySpecificNewsCard/CompanySpecificNewsCard';

export default function SpecificCompany()
{
    return (
        <>
            <div id="specific_company" className="container-fluid-sm pt-4 container">
                <div id="specific_company_details_row" className="row justify-content-center">
                    {/* company details card */}
                    <div id="specific_company_details" className="col-lg-9 mr-2 my-2 col-md-9 col-sm-10 ">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src="images/hdfc_icon.svg" />
                                <p className="mb-0 ml-2 p-16-20-bold-gray">HDFC BANK</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="btn btn-outline-secondary  px-2" ><i class="fa fa-plus" aria-hidden="true"></i></button>
                                <button className="btn btn-outline-secondary mx-1 px-2"><i class="fa fa-download" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        
                        <br />
                        {/* description */}
                        <p className="p-14-17-500-gray px-2">
                        HDFC Bank Ltd. is in Bank - Private. It was incorporated in year 1994. The current market
                         capitalisation stands ₹6,16,635 Cr. The company is listed on the Bombay Stock Exchange (BSE) 
                         with the BSE code as 500180. and also listed on National Stock Exchange (NSE) with NSE code
                          as HDFC BANK.
                        </p> 
                        <br />

                        {/* stats */}
                        <div className="d-flex flex-wrap justify-content-around">
                            <div className="mr-2">
                                <p className="p-14-17-normal-gray mb-0">Trading Range</p>
                                <p  className="p-14-20-bold-gray ">Rs. 111.00 - 222.22</p>
                            </div>
                            <div className="mr-2">
                                <p className="p-14-17-normal-gray mb-0">Trading Range</p>
                                <p  className="p-14-20-bold-gray ">Rs. 111.00 - 222.22</p>
                            </div>
                            <div className="mr-2">
                                <p className="p-14-17-normal-gray mb-0">Trading Range</p>
                                <p  className="p-14-20-bold-gray ">Rs. 111.00 - 222.22</p>
                            </div>
                            <div className="mr-2">
                                <p className="p-14-17-normal-gray mb-0">Trading Range</p>
                                <p  className="p-14-20-bold-gray ">Rs. 111.00 - 222.22</p>
                            </div>
                            <div className="mr-2" >
                                <p className="p-14-17-normal-gray mb-0">Trading Range</p>
                                <p  className="p-14-20-bold-gray ">Rs. 111.00 - 222.22</p>
                            </div>
                            <div className="mr-2">
                                <p className="p-14-17-normal-gray mb-0">Trading Range</p>
                                <p  className="p-14-20-bold-gray ">Rs. 111.00 - 222.22</p>
                            </div>
                            <div className="mr-2">
                                <p className="p-14-17-normal-gray mb-0">Trading Range</p>
                                <p  className="p-14-20-bold-gray ">Rs. 111.00 - 222.22</p>
                            </div>

                        </div>
                    <br />
                    <u><a className="pl-2" role="button">Latest details of HDFC Stocks </a></u>
                    </div>

                    {/* trade card */}
                    <div  className="col-lg-2 p-0 col-md-3 col-sm-8">
                        <div id="specific_company_trade_card" className="d-flex m-2 p-4 flex-column align-items-center">
                            <img src="images/company_specific_trade.svg" className="mb-3" width="75" />
                            <p className="text-center">Directly reach out to place Buy/Sell orders</p>
                            <button className="btn-violet-text-white w-100 p-2">Trade</button>
                        </div>
                           
                    </div>  
                </div>
                
                <div id="company_specific_inventory_row" className="row justify-content-center">
                    <div  className="col-lg-9 m-2 col-md-9 col-sm-10 p-0">
                        <CompanySpecificInventory />
                    </div>
                    <div  className="col-lg-2 invisible m-2 col-md-3 col-sm-8">
                    </div>
                </div>
                <div id="company_specific_news_row" className="row justify-content-center">
                    <div  className="col-lg-9 m-2 col-md-9 col-sm-10 p-0">
                                <CompanySpecificNewsCard
                                    id={uuidv4()}
                                    key = {uuidv4()}
                                    description = {"Watch this edition of Ideas For Profit with Moneycontrol's Sakshi Batra to know how HDFC Bank has managed to stay on top of the game amid an imminent change in leadership and the uncertain economic scenario and whether that makes it a potential re-rating candidate"}
                                    title = {"Ideas For Profit | HDFC Bank Q2: Could it trigger re-rating of the stock?"}
                                    author={"19 Oct 2020, 02:36 PM"}
                                    imgurl = {"https://blog.mountainroseherbs.com/hs-fs/hubfs/NEWOWNERSHIP1%20copy.jpg?width=1260&name=NEWOWNERSHIP1%20copy.jpg"}
                                />
                                <CompanySpecificNewsCard 
                                    id={uuidv4()}
                                    key = {uuidv4()}
                                    description = {"Watch this edition of Ideas For Profit with Moneycontrol's Sakshi Batra to know how HDFC Bank has managed to stay on top of the game amid an imminent change in leadership and the uncertain economic scenario and whether that makes it a potential re-rating candidate"}
                                    title = {"Ideas For Profit | HDFC Bank Q2: Could it trigger re-rating of the stock?"}
                                    author={"19 Oct 2020, 02:36 PM"}
                                    imgurl = {"https://blog.mountainroseherbs.com/hs-fs/hubfs/NEWOWNERSHIP1%20copy.jpg?width=1260&name=NEWOWNERSHIP1%20copy.jpg"}
                                />
                    </div>
                    <div  className="col-lg-2 invisible m-2 col-md-3 col-sm-8">
                    </div>
                </div>
                
            </div>
        </>
    )
}