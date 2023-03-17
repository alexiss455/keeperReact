import React from "react";
import "./App.css";
import Cards from "../assets/cards"
import details from "./TitelDescription";

console.log(details);

function App() {
  return (
    <div className="containers">
      <div className="textContainer">
      {details.map((detail) =>{
        
        return (
        <Cards 
        key = {detail.id}
        title = {detail.title}
        description = {detail.description.substring(0, 100) +"..."}
       />
        )
        
      })}
     
      </div>
    </div>
  );
}

export default App;
