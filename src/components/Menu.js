import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="ui menu">
      <Link className="header item" to="/">
        Accordion
      </Link>
      <Link className="item" to="/search">
        Searchf
      </Link>
      <Link className="item" to="/dropdown">
        Dropdown
      </Link>
      <Link className="item" to="/translate">
        Translahghgte
      </Link>
    </div>
  );
};

export default Menu;
