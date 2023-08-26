import React from "react";
import Card from "./Card1";
import universities from "../data";

function createcard(item) {
  return <Card key={item.id} n={item.name} men={item.desc} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>Team Page</span>
      </h1>
      <h3>
        Learn from Scientists,Reaserach Scholars from the Top Institutes in the
        World
      </h3>
      <dl className="dictionary">{universities.map(createcard)}</dl>
    </div>
  );
}

export default App;
