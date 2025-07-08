import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section>Parallax</section>
      <section id="Skills">Skills</section>
      <section>Parallax</section>
      <section id="Portfolio1">Portfolio1</section>
      <section id="Portfolio2">Portfolio2</section>
      <section id="Portfolio3">Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
