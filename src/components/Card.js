import React from "react";
import "../index.css";
function Card({ person }) {
  return (
   
     
      <div style={{ textAlign: "center"}}>
        <div style={{ display: "flex" }}>
         <p> <h2 style={{margin:"0 auto"}}>{person.name}</h2>
          <p>{person.email}</p>
          <p>{person.address}</p>
          </p>
          <p>
            <img style={{margin:"0 auto"}} src={person.image} width="100" height="100" />
          </p>
        </div>
         
        <hr />
      </div>
  
  );
}

export default Card;
