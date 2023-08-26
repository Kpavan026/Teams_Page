import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span>{props.n}</span>
      </dt>
      <dd>{props.men}</dd>
    </div>
  );
}

export default Card;
