import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './layout.scss';

const Layout = () => {
    return(
        <main className="layout">
        <Navbar />
        <section className="page">
            <span className="tags top-html">&lt;html&gt;</span>
            <br />
            <span className="tags top-body">&lt;body&gt;</span>
            <br />
            <Outlet />
            <span className="tags bottom-body">&lt;/body&gt;</span>
            <br />
            <span className="tags bottom-html">&lt;/html&gt;</span>
        </section>
        </main>
    )
}

export default Layout;