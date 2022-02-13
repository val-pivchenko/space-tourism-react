import Navbar from "../components/Navbar";
import '../styles/Destination.css'
import data from '../data.json'

const Destination = () => {

    const { destinations } = data;

    console.log(destinations)

    return <div className="destination">
        <Navbar />
        <div className="destination-content">
            <div className="destination-content-left">
                <h5 className="destination-heading-5 heading-5">
                    <span className="grey">01</span> Pick your destination
                </h5>
                <img src="" alt="" />
            </div>
            <div className="destination-content-right">
                <ul className="ul-dest">
                    <li className="li-dest"></li>
                    <li className="li-dest"></li>
                    <li className="li-dest"></li>
                    <li className="li-dest"></li>
                </ul>
                <h1 className="destination-heading-1 heading-1"></h1>
                <p className="destination-bodytext bodytext"></p>
                <hr />
                <div className="planet-info">
                    <div className="distance">
                        <p className="sh2"></p>
                        <p className="sh1"></p>
                    </div>
                    <div className="travel-time">
                        <p className="sh2"></p>
                        <p className="sh1"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Destination;
