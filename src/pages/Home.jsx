import { useEffect } from "react";
import Banner from "../components/Banner";
import Gadgets from "./Gadgets";

const Home = () => {
    useEffect(() => {
        document.title = "Gadget Heaven";
    }, []);

    return (
        <div>
            <header>
                <Banner />
            </header>

            <main>
                <Gadgets></Gadgets>
            </main>
        </div>
    );
};

export default Home;
