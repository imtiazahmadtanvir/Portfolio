import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Outlet from "../Components/Outlet";
const MainLayout = () => {
    return (
        <div className="bg-white">
            {/* Navbar */}
            <Navbar/>

            <div className='min-h-[calc(100vh-388px)]'>  
                
                {/* daynamic section */}
                <Outlet/>

            </div>
            {/* Footer */}
            <Footer/>
             

            
        </div>
    );
};

export default MainLayout;