import React from "react";
import { Link } from "react-router-dom";

export default function About({ users }) {
  return (
    <>
      <h2>Профиль</h2>
      <div className="sellerImg">
        <Link target="_self">
          <img src={users[0]?.avatar}
            alt=""
          />
        </Link>
      </div>
      <div className="sellerRight">
        <h3 className="sellerTitle">
            {users[0]?.name}
        </h3>
      </div>
    </>
  );
}
