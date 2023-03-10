import React from "react"




export default function Cards(props){
   
      

    return(
<div className="cards-container">

    <h2>{props.card.place}</h2>
    <img src = {props.card.img} />
    <h3>Price: {props.card.price}</h3>
    <h3>Time To Go: {props.card.timeToGo}</h3>
    </div>
    )
}