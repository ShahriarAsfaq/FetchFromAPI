import React from "react";
import { useState } from "react";
import {Card} from "./Card";
import { Details } from "./Details";
import {useNavigate} from "react-router-dom";

var atitle;
export const CardList =() => {
    const[animetitle,setAnimeTitle]= useState([{id:2,title:"new"},{id:3,title:"old"}]);
    //const[animetitle,setAnimeTitle]= useState([1,2,3]);
     const Submitdata=()=>{
        fetch("https://top-anime.p.rapidapi.com/anime/3/5", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "top-anime.p.rapidapi.com",
                "x-rapidapi-key": "5babf243d7mshc6a1c221e1153fbp1e5257jsncb897a9793a7"
            }
        })
        
    .then(response => 
        response.json()
        .then((data)=>{
            setAnimeTitle(data.map(a => a.title))
            console.log(data[0].title);
    })
    )
    .catch(err => {
        console.error(err);
    });
        }
    //Submitdata();
    const animeList = animetitle.map(an=>(
        <Card key={an.id}
        id={an.id}
        title={an.title}
        retunID={retunID} /> 
    ));
 
   // const naviagte = useNavigate();
    function retunID(id){
        let index = animetitle.findIndex((obj) => obj.id === id);
        
        atitle= animetitle[index];
        console.log(atitle);
       // naviagte("/Details");
    }

    //const[pageloader,setPageLoader]=useState(false);
    return(
        <div>
            {animeList}
            {/* <Card Info={animetitle} /> */}
        </div>
        );
    
    };