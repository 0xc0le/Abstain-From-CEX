import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import History from "./components/history";
import Footer from "./components/footer";
import Cexed from "./pages/CEX Ed/cexed";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <History />
      <Footer />
      <Cexed />
    </div>
  );
}

export default App;
