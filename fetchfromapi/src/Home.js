import React from "react";
import { useState } from "react";
import { CardList } from "./CardList";

var btn;
export const Home =() => {
const[currentPage,setCurrentpage]= useState(true);
 
function allAnime(){
    btn= 1;
    setCurrentpage(false);
}
function naruto(){
    btn = 2;
    console.log("naruto pressed");
    setCurrentpage(false);
}
function topAnime(){
    btn= 3;
    setCurrentpage(false);
}

if(currentPage){
return(
    <div>
        <h1>Select What You want to Watch</h1>
    <div>
        <button onClick={allAnime}>Fetch All Anime in this site</button>
        
    </div>
    <div>
        <button onClick={naruto}>Fetch All Naruto Informations</button>
    </div>
    <div>
        <button onClick={topAnime}>Fetch Top Rated Informations</button>
    </div>
    </div>


    );
}
else{
    return(
        <div>
            <CardList btn={btn} />
        </div>
    );
}

};