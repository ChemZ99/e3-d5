import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HeaderBar from "./components/HeaderBar";
import Gallery from "./components/Gallery";
import Footer from "./components/NfFooter";

function App() {
  return (
    <div className="App bg-main">
      <NavBar />
      <HeaderBar />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
