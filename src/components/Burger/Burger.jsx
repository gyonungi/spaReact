import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Burger({ open, setOpen }) {
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (open && ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
  }, [open]);
  return (
    <nav ref={ref} className="navbar">
      <button className="toggle" onClick={() => setOpen((prev) => !prev)}>
        {open ? (
          <MdClose style={{ width: "32px", height: "32px" }} />
        ) : (
          <FiMenu
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        )}
      </button>
      <ul className={`menu-nav${open ? " show-menu" : ""}`}>
        <li>
          <Link to="/about">Обо мне</Link>
        </li>
        <li>
          <Link to="/">Список Постов</Link>
        </li>
      </ul>
    </nav>
  );
}
