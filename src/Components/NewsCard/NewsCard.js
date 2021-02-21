import React from 'react';
import  "./newsCard.css";

export default function NewsCard(props)
{
    return (
    <div id={props.id}  className=" card newsCard border-0  my-2">
        <div className="row ">
           <div className="col-lg-2 col-md-4 ">
               <img src={props.imgurl} alt="nothing to show" className=" w-100" />
           </div>
           <div className="col-lg-9 col-md-8">
               <div className="card-block py-2 ">
                 <h4 id={props.id + "title"} className="card-title">{props.title}</h4>
                 <p  id={props.id +"description"} className="card-text p-14-17-normal-gray">{props.description} .... 
                 {/* <span className="text-primary" role="button" onClick={()=>{props.readLater(props.id)}}>Read More</span> */}
                  </p>
                  <hr className="w-50" />
                 <p className="p-12-15-600-gray">Author:{props.author}</p>
               </div>
           </div>
       </div>
     </div>       
    )
}
