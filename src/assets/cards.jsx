import React from "react";


export default function card(props){
    
    return(
        <div className="contentMain">
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    );

}