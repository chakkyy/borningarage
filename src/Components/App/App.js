import Header from "../Header/Header";
import CarGrid from "../CarGrid/CarGrid";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="page">
      <Menu />
      <Header />
      <main role="main" id="main-content">
        <CarGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
