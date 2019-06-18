import React from "react";

function Header({ subtitle }) {
  return (
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Kochi Metro</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </div>
    </section>
  );
}

export default Header;
