import {useContext, useState } from "react";
import React from "react";



export function Details(props){
  
  console.log(props.id);

  const[description,setDescription]=useState("desc");
  return(
            
        <div >
                
                <div>
                   <h1>Title: {props.id}</h1>
                   <p>Description : {description}</p>
                </div> 
            
        </div>
    );
};


