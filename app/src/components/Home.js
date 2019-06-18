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
      <form className="section">
        <div className="container">
          <h2 className="title">Contact Us</h2>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Add message here"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control has-text-centered">
              <button className="button is-primary">Message</button>
            </div>
          </div>
        </div>
      </form>
      <footer className="footer has-background-dark has-text-white">
        <div className="content has-text-centered">
          <p>Website by Boy with Silver Wings</p>
        </div>
      </footer>
    </main>
  );
}

export default Home;
