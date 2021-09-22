import React from "react";
import "../index.css";
function Card({ person }) {
  return (
    <div
      style={{
        margin:"2px",
        display: "flex",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3px",
      }}
    >
      <p>
        <h2 style={{ margin: "0 auto" }}>{person.name}</h2>
        <p>{person.email}</p>
        <p>{person.address}</p>
      </p>
      <img src={person.image} width="100" height="100" />
    </div>
  );
}

export default Card;
