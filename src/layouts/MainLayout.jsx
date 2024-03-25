import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            {/* packet */}
            <div className="min-h-[calc(100vh-116px)]"><Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;