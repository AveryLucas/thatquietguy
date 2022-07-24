import React from "react";
import { Link } from "react-router-dom";

const Header = ({ background }) => {
  return (
    <Link to="/" id="app-header">
      <div className="my-site" style={{ background }}>
        That Quiet Guy
      </div>
    </Link>
  );
};

export default Header;
