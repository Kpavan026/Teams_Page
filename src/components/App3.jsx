import React from "react";
import Card3 from "./Card3";
import profs from "../data3";

function createcard(item) {
  return (
    <Card3
      key={item.id}
      n={item.name}
      clg={item.college}
      url={item.url}
      des={item.des}
    />
  );
}

function App3() {
  return (
    <div>
      <h3>Mentors And Advisors</h3>
      <p className="dictionary2">{profs.map(createcard)}</p>
    </div>
  );
}

export default App3;
