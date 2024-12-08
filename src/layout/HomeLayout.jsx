import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
             <header className="mt-6">
                  <Navbar></Navbar>
                  <Banner></Banner>
            </header>
            <main>
            git remote add origin https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-imtiazahmadtanvir.git
            </main>

            <footer>
                <Footer>
                </Footer>                  
            </footer>



        </div>
    );
};

export default HomeLayout;