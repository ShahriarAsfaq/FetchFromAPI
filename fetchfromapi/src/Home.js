import React from "react";
import { useState } from "react";

export const Home =() => {
const[anime,setAnime]= useState([]);
 function Submitdata (){
    fetch("https://game-prices.p.rapidapi.com/game/minecraft?region=us&type=game", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "game-prices.p.rapidapi.com",
            "x-rapidapi-key": "5babf243d7mshc6a1c221e1153fbp1e5257jsncb897a9793a7"
        }
    })

.then(response => 
    response.json()
    .then((data)=>{
    setAnime(data.stores.map(a => a.seller))
	console.log(data.stores[0].seller);
})
)
.catch(err => {
	console.error(err);
});
    }
Submitdata();
return(
    <div>
        {anime}
    </div>

    );

};