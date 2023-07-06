import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";
import Pagination from "../pagin/Pagination";
import "../app.scss";
export default function Main({ users, setCurrentPage, addText }) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  return (
    <>
      <hr />
      <form className="form" onSubmit={()=> addText()}>
        <div className="mainInput">
          <label for="ControlInput" class="form-label">
            Заголовок:
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="ControlInput"
            placeholder="Заголовок"
          />
        </div>
        <div className="mainText">
          <label for="ControlTextarea" className="form-label">
            Текст:
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="textarea"
            name="text"
            id="ControlTextarea"
            rows="3"
          ></textarea>
        </div>
        <button  type="submit" className="btn">
          Добавить
        </button>
      </form>
      <hr />
      <div>
        {users?.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
      <Pagination onChangePage={(i) => setCurrentPage(i)} />
    </>
  );
}
