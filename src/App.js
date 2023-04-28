import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Header from "./Components/Header";
import Hobbies from "./Components/Hobbies";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Education />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
