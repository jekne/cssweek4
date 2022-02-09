import "./App.css";
import {
  Navigation,
  Hero,
  LatestNews,
  WorldNews,
  LocalNews,
  Footer,
} from "./components";

function App() {
  return (
    // Add a className to each div
    // Go the App.css and write the styles there
    <div className="mainContainer">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="newsContainer">
        <LatestNews />
        <WorldNews />
        <LocalNews />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
