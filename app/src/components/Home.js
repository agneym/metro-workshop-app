import React from "react";

function Home() {
  return (
    <main>
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Kochi Metro</h1>
            <h2 className="subtitle">Most Advanced Metro System in India</h2>
          </div>
        </div>
      </section>
      <section className="section level services">
        <div className="container">
          <h2 className="subtitle is-4">Services</h2>
          <ol>
            <li>Kochi Metro Rail Ltd.</li>
            <li>Water Metro</li>
            <li>Cycles</li>
          </ol>
        </div>
        <div className="container">
          <h2 className="subtitle is-4">Upcoming Services</h2>
          <ul>
            <li>One Ticket</li>
            <li>NMT</li>
            <li>Feeder Services</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
