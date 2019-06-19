import React from "react";
import Header from "./Header";

function Stations() {
  return (
    <main>
      <Header subtitle="Station Information" />
      <section className="section">
        <div className="container">
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt=""
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content"></div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Stations;
