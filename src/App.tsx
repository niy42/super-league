import { useState } from "react";
import WeeklyArts from "./components/arts/arts";
import ExtricatorHero from "./components/extractor/extractor";
import Footer from "./components/footer/footer";
import MeetTeam from "./components/meetTeam/meetTeam";
import EarlyAlphaSignup from "./components/signUp/signUp";
import Stats from "./components/stats/stats";

export default function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [closing, setClosing] = useState(false);
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setToggleMenu(false);
      setClosing(false);
    }, 400);
  };
  return (
    <>
      <div
        className={`min-h-screen overflow-hidden bg-superleague text-white ${closing ? "slide-out" : ""} `}
      >
        <ExtricatorHero
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          closing={closing}
          handleClose={handleClose}
        />
        <div onClick={handleClose}>
          <Stats />
          <WeeklyArts />
          <MeetTeam />
          <EarlyAlphaSignup />
          <Footer />
        </div>
      </div>
    </>
  );
}
