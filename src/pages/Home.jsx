import Navbar from "../components/Navbar";
import '../styles/Home.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    return <div className="home">
        <section className="home-top">
            <Navbar />
        </section>
        <section className="home-bottom">
            <div className="home-content">
                <div className="home-content-left">
                    <h5 className="home-heading-5 heading-5">So, you want to travel to</h5>
                    <h1 className="home-heading-1 heading-1">Space</h1>
                    <p className="home-bodytext bodytext">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="home-content-right">
                    <button onClick={() => {
                        navigate('/destination')
                    }} className="home-explore heading-4">Explore</button>
                </div>
            </div>
        </section>

    </div>;
};

export default Home;
