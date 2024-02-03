import "./App.css";
import HeaderCTA from "./components/HeaderCTA";
import NavBar from "./components/NavBar";
import AboveFold from "./components/AboveFold";
import Contact from "./components/Contact";
import Services from "./components/Services";
import SuccessRate from "./components/SuccessRate";

function App() {
  return (
    <>
      <header>
        <HeaderCTA />
      </header>
      <NavBar />
      <main>
        <AboveFold />
        <Contact />
        <Services />
        <SuccessRate />
      </main>
    </>
  );
}

export default App;
