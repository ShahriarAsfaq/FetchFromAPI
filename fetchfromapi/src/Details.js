import {useContext, useState } from "react";
import React from "react";



export function Details(props){
  
  console.log("in deatils",props.id);

  const[description,setDescription]=useState("desc");
  return(
            
        <div >
                
                <div>
                   <h1>Title: {props.id.title}</h1>
                   <div>Address : {props.id.address}</div>
                     <div>
                         <p>Image :</p>
                     </div>
                     <div>
                         <img src={props.id.image} height={50} width={50}/>
                     </div>
                </div> 
            
        </div>
    );
};


