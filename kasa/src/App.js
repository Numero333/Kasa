import { Header } from "./components/Navbar";
import { Router } from "./components/Router";
import { Footer } from "./components/Footer";

// mettre ici le fichier json pour le charger qu'une seule fois et changer dans le fichier navvar le nom du fichier

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
