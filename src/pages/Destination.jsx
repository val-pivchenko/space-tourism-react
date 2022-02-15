import Navbar from "../components/Navbar";
import { useState } from "react";
import '../styles/Destination.css'
import data from '../data.json'

const Destination = () => {

    const { destinations } = data;

    const [destination, setDestination] = useState(0)

    return (
        <div className="destination">
            <div className="destination-top">
                <Navbar />
            </div>
            <div className="destination-bottom">
                <div className="header">
                    <h5 className="destination-heading-5 top heading-5">
                        <span className="grey">01</span> Pick your destination
                    </h5>
                </div>
                <div className="destination-content">
                    <div className="destination-content-left">
                        <img className="planet-img" src={destinations[destination].images.webp} alt={destinations[destination].name} />
                    </div>
                    <div className="destination-content-right">
                        <ul className="ul-dest">
                            <li className="li-dest"><button className={"btn-dest" + (destination === 0 ? " active" : "")} onClick={() => { setDestination(0) }}>Moon</button></li>
                            <li className="li-dest"><button className={"btn-dest" + (destination === 1 ? " active" : "")} onClick={() => { setDestination(1) }}>Mars</button></li>
                            <li className="li-dest"><button className={"btn-dest" + (destination === 2 ? " active" : "")} onClick={() => { setDestination(2) }}>Europa</button></li>
                            <li className="li-dest"><button className={"btn-dest" + (destination === 3 ? " active" : "")} onClick={() => { setDestination(3) }}>Titan</button></li>
                        </ul>
                        <h1 className="destination-heading-1 heading-1">{destinations[destination].name}</h1>
                        <p className="destination-bodytext bodytext">{destinations[destination].description}</p>
                        <div className="planet-info">
                            <div className="distance">
                                <p className="sh2">Avg. distance</p>
                                <p className="sh1">{destinations[destination].distance}</p>
                            </div>
                            <div className="travel-time">
                                <p className="sh2">Est. travel time</p>
                                <p className="sh1">{destinations[destination].travel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>)
};

export default Destination;
