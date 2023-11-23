// src/components/Dropdown.js
import React, { useState } from 'react';
import './styles/BotonFlotante.css'; // Archivo de estilos

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        ☰
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <a href="#">Opción 1</a>
          <a href="#">Opción 2</a>
          <a href="#">Opción 3</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
