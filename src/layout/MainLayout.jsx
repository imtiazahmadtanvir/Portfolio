import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
             <header className="mt-6">
             <NavBar />
            </header>
            <div className="min-h-[calc(100vh-350px)]">
                <Outlet />
            </div>
            <div className=''>
              <Footer />

            </div>
        </div>
    );
};

export default MainLayout;