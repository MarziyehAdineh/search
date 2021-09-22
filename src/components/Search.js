import React, { useState } from "react";
// import '../styles.css';
import SearchList from "./SearchList";
function NormalizeStr(str) {
  return str.replace("آ", "ا")
  .replace(/[\u0629]/g, 'ه')
  .replace("ي","ی")
  .replace("ئ","ی")
  .toLowerCase().trim();
}
function TopSearchComponent({ details }) {
  const [searchField, setSearchField] = useState("");
  const filteredPersons = details.filter((person) => {
  const sp=NormalizeStr(searchField).split(' ');
    return (
      sp.every(a=>NormalizeStr(person.name+" "+person.email+" "+person.address).includes(a))
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

export default TopSearchComponent;
