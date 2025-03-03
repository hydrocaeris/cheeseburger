import React from 'react';
import './header.css'; // Impor CSS

const Header = ({ listMenu }) => {
  return (
    <header>
      <nav>
        <ul>
          {listMenu.map((menu) => (
            <li key={menu.code}>
              <a href={`#${menu.code}`}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;