import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.n}</h2>
        <img className="circle-img" src={props.url} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.clg}</p>
        <p className="info">{props.des}</p>
        <button className="button-3">Message Him</button>
      </div>
    </div>
  );
}

export default Card;
