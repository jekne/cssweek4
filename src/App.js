import './App.css';
import { Navigation, Hero, LatestNews, WorldNews, LocalNews, Footer } from "./components"

function App() {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <div>
        <LatestNews/>
        <WorldNews/>
        <LocalNews/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
