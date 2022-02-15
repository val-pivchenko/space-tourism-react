import Navbar from "../components/Navbar";
import '../styles/Crew.css'
import { useState } from "react";
import data from '../data.json'


const Crew = () => {

    const { crew } = data;

    const [crewPerson, setCrewPerson] = useState(0)

    return <div className="crew">
        <div className="crew-top">
            <Navbar />
        </div>
        <div className="crew-bottom">
            <div className="header">
                <h5 className="crew-heading-5 top heading-5">
                    <span className="grey">02</span> Meet your crew
                </h5>
            </div>
            <div className="crew-content">
                <div className="crew-content-left">
                    <h1 className="crew-heading-4 heading-4">{crew[crewPerson].role}</h1>
                    <h1 className="crew-heading-3 heading-3">{crew[crewPerson].name}</h1>
                    <p className="crew-bodytext bodytext">{crew[crewPerson].bio}</p>
                    <ul className="ul-crew">
                        <li className="li-crew"><button className={"btn-crew" + (crewPerson === 0 ? " active" : "")} onClick={() => { setCrewPerson(0) }}></button></li>
                        <li className="li-crew"><button className={"btn-crew" + (crewPerson === 1 ? " active" : "")} onClick={() => { setCrewPerson(1) }}></button></li>
                        <li className="li-crew"><button className={"btn-crew" + (crewPerson === 2 ? " active" : "")} onClick={() => { setCrewPerson(2) }}></button></li>
                        <li className="li-crew"><button className={"btn-crew" + (crewPerson === 3 ? " active" : "")} onClick={() => { setCrewPerson(3) }}></button></li>
                    </ul>
                </div>
                <div className="crew-content-right">
                    <img className="crew-img" src={crew[crewPerson].images.png} alt={crew[crewPerson].name} />
                </div>
            </div>
        </div>

    </div>;
};

export default Crew;
