import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Card from "./components/card/Card";

import "./app.scss";
import Burger from "./components/Burger/Burger";
import ReactPaginate from "react-paginate";
import Pagination from "./pagin/Pagination";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Main from "./pages/Main";
function App() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState([]);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const addText = (obj) =>{
    axios.post(`https://64a56be700c3559aa9bfad48.mockapi.io/users`,obj)
    setUsers((prev)=>[...prev,obj])
  }
  useEffect(() => {
    async function fetchData() {
      const usersResponce = await axios.get(
        `https://64a56be700c3559aa9bfad48.mockapi.io/users?page=${currentPage}&limit=2`
      );
      setUsers(usersResponce.data);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    fetchData();
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="container">
          <header>
            <h1>Post React</h1>
            <Burger open={open} setOpen={setOpen} />
          </header>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  users={users}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setUsers={setUsers}
                  addText={addText}
                />
              }
            />
            <Route path="/about" element={<About users={users} />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
