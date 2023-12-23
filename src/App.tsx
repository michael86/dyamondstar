import "./App.css";
import HeaderCTA from "./components/HeaderCTA";
import NavBar from "./components/NavBar";
import AboveFold from "./components/AboveFold";

function App() {
  return (
    <>
      <header>
        <HeaderCTA />
      </header>
      <NavBar />
      <main>
        <AboveFold />
      </main>
    </>
  );
}

export default App;
