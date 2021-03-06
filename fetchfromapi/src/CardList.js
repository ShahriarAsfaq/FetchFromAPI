import React, { useEffect } from "react";
import { useState } from "react";
import {Card} from "./Card";
import { Details } from "./Details";
import {useNavigate} from "react-router-dom";

var atitle;
var url1;
export const CardList = (props) => {
    var i=0;
    console.log(props.btn);
    const[animetitle,setAnimeTitle]= useState([]);
    //const[animetitle,setAnimeTitle]= useState([1,2,3]);
    if(props.btn==1){
     url1 = "https://top-anime.p.rapidapi.com/all";
    }
    else if(props.btn==2){
         url1 = "https://top-anime.p.rapidapi.com/anime/naruto";
    }
    else if(props.btn==3){
         url1 = "https://top-anime.p.rapidapi.com/anime/3/5";
    }

    const[pageloader,setPageLoader]=useState(false);

     const Submitdata=()=>{
        fetch(url1, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "top-anime.p.rapidapi.com",
                "x-rapidapi-key": "5babf243d7mshc6a1c221e1153fbp1e5257jsncb897a9793a7"
            }
        })
        
    .then(response => 
        response.json()
        .then((data)=>{
            setAnimeTitle(data.map(a => a))
            console.log(data[0].title);
    })
    )
    .catch(err => {
        console.error(err);
    });
        }
    useEffect(()=>{
        Submitdata();
    },[])
    
    animetitle.sort((a, b) => a.title.localeCompare(b.title));

    const animeList = animetitle.map(an=>(
        <Card key={i}
        id={i++}
        title={an.title}
        address={an.address}
        image={an.image}
        retunID={retunID} 
        />
        
         
    ));
 
   // const naviagte = useNavigate();
    function retunID(id){
        let index = animetitle.findIndex((obj) => obj.id === id);
        console.log("in list", id);
        atitle= animetitle[id];
        console.log(atitle);
       // naviagte("/Details");
       setPageLoader(true);
    }

    
if(!pageloader){
    return(
        <div>
            {animeList}
            {/* <Card Info={animetitle} /> */}

        </div>
        );
    }
    else{
        return(
            <div>
               <Details id={atitle} />
    
            </div>
            );
    }
    
    };