import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="content">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
