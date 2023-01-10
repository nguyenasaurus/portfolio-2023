import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-full h-screen bg-purple-900">
      <Intro />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
