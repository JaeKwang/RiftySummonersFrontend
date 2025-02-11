import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

function Layout() {

    return (
        <div className='bg-gray-700 flex flex-col min-h-screen'>
            <Header />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default Layout;