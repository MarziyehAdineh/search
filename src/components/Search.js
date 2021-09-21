import React, { useState } from "react";

import SearchList from "./SearchList";
function NormalizeStr(str) {
  return str.replace("آ", "ا").replace(/[\u0649]/g, 'ي').replace(/[\u0629]/g, 'ه').toLowerCase().trim();
}
function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const filteredPersons = details.filter((person) => {
    return (
      NormalizeStr(person.name).includes(NormalizeStr(searchField)) ||
      NormalizeStr(person.email).includes(NormalizeStr(searchField))||
      NormalizeStr(person.address).includes(NormalizeStr(searchField))
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      // <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      // {/* </Scroll> */}
    );
  }

  return (
    <section className="garamond" style={{margin:'0 auto', width:'400px'}}>
      <div style={{fontFamily:"IranSans,sans-serif",textAlign:'center', border:'solid 2px black', background:'rgb(119,136,153)' }}>
        <div className="navy georgia ma0 grow">
          <h2 className="f2" style={{ color: "white" }}>
           :اطلاعات خود را جستجو کنید
          </h2>
        </div>
        <div className="pa2">
          <input
            style={{fontFamily:"IranSans",direction:"rtl",width:"250px"}}
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type="search"
            placeholder="جستجو"
            onChange={handleChange}
          />
          <br />
          <br />
          {/* <label  className="pa2">اطلاعات خود را جستجو کنید</label> */}
        </div>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
