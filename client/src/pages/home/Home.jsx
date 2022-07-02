import Get from "../../components/dupsztal/dupsztal";

import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
// import Posts from "../../components/posts/posts";

import "./home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Get />
    </div>
  );
}
