import React, { useState } from "react";

import stationData from "../data/stations";
import fareData from "../data/fareDetail";
import Header from "./Header";
import Footer from "./Footer";

function Fare() {
  const [starting, setStarting] = useState("ALVA");
  const [destination, setDestination] = useState("MACE");
  const [fare, setFare] = useState("");
  const calculateFare = event => {
    event.preventDefault();
    const result = fareData.find(
      station => station.originId === starting && station.destId === destination
    );
    if (result) {
      const resultingFare = result.fare;
      setFare(resultingFare);
    }
  };
  return (
    <main>
      <Header subtitle="Fare Calculator" />
      <section className="section">
        <form className="container level" onSubmit={calculateFare}>
          <div className="select field is-rounded">
            <label className="label" htmlFor="">
              Starting
            </label>
            <select
              value={starting}
              onChange={event => setStarting(event.target.value)}
            >
              {stationData.map(station => (
                <option value={station.stop_id}>{station.stop_name}</option>
              ))}
            </select>
          </div>
          <div className="select field is-rounded">
            <label className="label" htmlFor="">
              Destination
            </label>
            <select
              value={destination}
              onChange={event => setDestination(event.target.value)}
            >
              {stationData.map(station => (
                <option value={station.stop_id}>{station.stop_name}</option>
              ))}
            </select>
          </div>
          <div>
            <button className="button is-primary is-rounded">Calculate</button>
          </div>
        </form>
        {fare && (
          <div className="container section">
            <h2 className="subtitle">Your fare is</h2>
            <h1 className="title has-text-success">₹ {fare}</h1>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}

export default Fare;
