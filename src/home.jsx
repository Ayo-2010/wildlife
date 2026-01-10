import React from "react";
import Navbar from "./home/navbar.jsx";
import Homesec1 from "./home/homesec1.jsx";
import Achievement from "./home/achievement.jsx";
import Protect from "./home/protect.jsx";
import Impact from "./home/impact.jsx";
import Movement from "./home/movement.jsx";
import Updated from "./home/updated.jsx";
import Footer from "./home/footer.jsx";

function Home() {
  return (
    <div className="p-0 m-0">
      <nav className="sticky top-0 z-40 bg-white shadow-md">
        <Navbar />
      </nav>
      <Homesec1 />
      <Achievement />
      <Protect />
      <Impact />
      <Movement />
      <Updated />
      <Footer />
    </div>
  );
}

export default Home;
