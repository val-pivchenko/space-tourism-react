import Navbar from "../components/Navbar";
import { useState } from "react";
import '../styles/Technology.css'
import data from '../data.json'

const Technology = () => {

    const { technology } = data;

    const [tech, setTech] = useState(0)

    return <div className="technology">
        <div className="technology-top">
            <Navbar />
        </div>
        <div className="technology-bottom">
            <div className="header">
                <h5 className="technology-heading-5 top heading-5">
                    <span className="grey">03</span> Space launch 101
                </h5>
            </div>
            <div className="technology-content">
                <div className="technology-content-left">
                    <ul className="ul-tech">
                        <li className="li-tech"><button className={"btn-tech" + (tech === 0 ? " active" : "")} onClick={() => { setTech(0) }}>1</button></li>
                        <li className="li-tech"><button className={"btn-tech" + (tech === 1 ? " active" : "")} onClick={() => { setTech(1) }}>2</button></li>
                        <li className="li-tech"><button className={"btn-tech" + (tech === 2 ? " active" : "")} onClick={() => { setTech(2) }}>3</button></li>
                    </ul>
                    <div className="technology-text">
                        <p className="technology-heading-5 heading-5">The Terminology...</p>
                        <h1 className="technology-heading-1 heading-1">{technology[tech].name}</h1>
                        <p className="technology-bodytext bodytext">{technology[tech].description}</p>
                    </div>
                </div>
                <div className="technology-content-right">
                    <img className="tech-img-port" src={technology[tech].images.portrait} alt={technology[tech].name} />
                    <img className="tech-img-land" src={technology[tech].images.landscape} alt={technology[tech].name} />
                </div>
            </div>
        </div>

    </div>;
};

export default Technology;
