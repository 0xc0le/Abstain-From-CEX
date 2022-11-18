import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
// import Cexed from "./pages/cexed/cexed.js";
import Timeline from "./components/timeline";
import CexStats from "./components/CexStats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
