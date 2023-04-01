import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src="" alt="Ppic" />
        <span>Nas</span>
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
