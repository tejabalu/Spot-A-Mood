import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Landing from "../../pages/Landing";



const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}
export default Layout;