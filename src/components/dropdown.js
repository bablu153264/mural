import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const DropdownComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        id="dropbutton"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        Admin
      </button>
      {isOpen && (
        <div className="content">
        <ul className="dropdown-menu" >
          <li>
            <Link to='/HrLogin' className="link-style">
            < div className="dropdown-item" >
              HR
              </div>
              </Link>
          </li>
          <li>
          <Link to='/ItLogin' className="link-style">
            <div className="dropdown-item" >
              IT
            </div>
            </Link>
          </li>
          <li>
          <Link to='/TtLogin' className="link-style">
            <div className="dropdown-item" >
              TT
            </div>
            </Link>
          </li>
        </ul>
        </div>
      )}
    </div>
  );
};

export default class Dd extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
          <div>
            <DropdownComponent/>
          </div>
    );
  }
}