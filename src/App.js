import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
// import Header from "./components/header";
// import History from "./components/history";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header />
      <History /> */}
      <Footer />
    </div>
  );
}

export default App;
