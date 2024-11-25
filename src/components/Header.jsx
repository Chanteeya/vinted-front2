import React, { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    console.log("Rechercher :", searchQuery);
  };

  return (
    <header>
      <div className="container">
        <div className="column logo">
          <p>
            <img className="logo" src="src/assets/Vinted_logo.png" />
          </p>
        </div>
        <div className="column search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Recherche..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </form>
        </div>
        <div className="column button1">
          <button className="button1">S'inscrire</button>
        </div>
        <div className="column button2">
          <button className="button2">Se connecter</button>
        </div>
        <div className="column button3">
          <button className="button3">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
