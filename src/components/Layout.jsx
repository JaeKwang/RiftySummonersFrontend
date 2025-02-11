import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {

    return (
        <div className='bg-gray-700 flex flex-col min-h-screen'>
            <Header />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;