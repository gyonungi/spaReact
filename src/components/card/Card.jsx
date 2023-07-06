import React from "react";
import "./card.scss"
export default function Card({ name, avatar,text }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <img src={avatar} alt="avatar" />
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
