import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Card from "./components/card/Card";
import "react-bootstrap";
import "./app.scss";
import Burger from "./components/Burger/Burger";
import ReactPaginate from "react-paginate";
import Pagination from "./pagin/Pagination";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Main from "./pages/Main";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setUsers } from "./components/store/userSlice";
function App() {
  const [loading, setLoading] = useState(false);
  const users = useSelector((state) => state.user.items);

  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const addText = (obj) => {
    axios.post(`https://64a56be700c3559aa9bfad48.mockapi.io/users`, obj);
    dispatch(setUsers((prev) => [...prev, obj]));
  };
  useEffect(() => {
    async function fetchData() {
      dispatch(fetchUsers({ currentPage }));
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
