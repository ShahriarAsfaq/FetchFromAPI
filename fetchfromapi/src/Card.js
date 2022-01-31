import {useContext, useState } from "react";
import React from "react";
import { Details } from "./Details";

var idx;
export function Card(props){
  
  //console.log(props.Info);
var a=true;
//const[index,setIndex] = useState(true);
  const gotoDetails=()=>{
     console.log("dtails id = ",props.id);
     // a=false
     // setIndex(true);
    props.retunID(props.id);
  }

  const newdata = () =>{
    //setIndex(false);
    a=true
    console.log('asd')
  }

  if(a==true){
    return(
            
        <div >
             
                {/* <div>
                     { props.Info.map(i =>(
                    <div>
                        
                        <div key={i}>Title : {i} 
                        <div>
                        <button onClick={gotoDetails(i)}>Details</button>
                        </div>
                        </div>
                        
                        
                        
                    </div>
                    ))  
                    } */}
                     

                     <div>Title: {props.title}</div>
                     
                    <button onClick={gotoDetails}>Details</button> 
                    {/* {newdata}
                </div> 
                 */}
                
            
        </div>
    );
  }
  else {
      return (
          <div>

          </div>
      )
  }

//   return(
            
//         <div >
//             {a &&
//                 <div>
//                      { props.Info.map(i =>(
//                     <div>
                        
//                         <div key={i}>Title : {i} 
//                         <div>
//                         <button onClick={gotoDetails(i)}>Details</button>
//                         </div>
//                         </div>
                        
                        
                        
//                     </div>
//                     ))  
//                     }
                     

//                     {/* <div>Title: {props.title}</div>
//                     <button onClick={gotoDetails}>Details</button> */}
//                     {newdata}
//                 </div> 
                
                
//             }
//         </div>
//     );
};


