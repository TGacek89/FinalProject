import Get from "../../components/Get/Get";
import Footer from "../../components/Footer/Footer";

import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

import "./home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="home">
        <Get />
      </div>
      <Footer />
    </div>
  );
}
