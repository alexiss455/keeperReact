import React from "react";

export default function card(props) {
  return (
    <div className="contentMain">
      <p>{props.title}</p>
      <p>{props.description}</p>
      
      <button 
      className="delete_cards" 
      onClick={()=>{
        props.deleteCards(props.id)
      }}>delete</button>
    </div>
  );
}
