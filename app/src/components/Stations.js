import React from "react";

import stationData from "../data/stations";
import Header from "./Header";
import Footer from "./Footer";

function Stations() {
  return (
    <main>
      <Header subtitle="Station Information" />
      <section className="section">
        <div className="container">
          {stationData.map(station => (
            <article className="media" key={station.stop_id}>
              <figure className="media-left">
                <p className="image is-64x64">
                  <img
                    src={"https://bulma.io/images/placeholders/128x128.png"}
                    alt=""
                  />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <strong>{station.stop_name}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Stations;
