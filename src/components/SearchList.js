import React from 'react';
import Card from './Card';
// import './styles.css';
function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(person =>  <Card key={person.id} person={person} />); 
  return (
    <div  
    style={{ fontSize:".8em",fontWeight: "300",direction: "rtl",
      lineHeight: "0.8",  border:'solid 1px ', background: "rgb(211,211,211)" }}>
      {filtered}
    </div>
  );
}

export default SearchList;