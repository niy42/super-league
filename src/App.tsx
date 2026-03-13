import WeeklyArts from "./components/arts/arts";
import ExtricatorHero from "./components/extractor/extractor";
import Footer from "./components/footer/footer";
import MeetTeam from "./components/meetTeam/meetTeam";
import EarlyAlphaSignup from "./components/signUp/signUp";
import Stats from "./components/stats/stats";

export default function App() {
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-superleague text-white">
        <ExtricatorHero />
        <Stats />
        <WeeklyArts />
        <MeetTeam />
        <EarlyAlphaSignup />
        <Footer />
      </div>
    </>
  );
}
