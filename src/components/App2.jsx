import React from "react";
import Card2 from "./Card2";
import profs from "../data2";

function createcard(item) {
  return (
    <Card2
      key={item.id}
      n={item.name}
      clg={item.college}
      url={item.url}
      des={item.des}
    />
  );
}

function App2() {
  return (
    <div>
      <h3>Meet Your Mentors</h3>
      <p className="dictionary2">{profs.map(createcard)}</p>
    </div>
  );
}

export default App2;
