import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  const Dropdown_menu = [
    {
      title: "Profile",
      path: "/profile",
      cName: "dropdown-link",
    },
    {
      title: "Update Profile",
      path: "/profile",
      cName: "dropdown-link",
    },
    {
      title: "Log Out",
      path: "/home",
      cName: "dropdown-link",
    },
  ];

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {Dropdown_menu.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
