import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <main>
      <Header subtitle="Most Advanced Metro System in India" />
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
      <Footer />
    </main>
  );
}

export default Home;
