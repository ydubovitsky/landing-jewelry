import logo from './logo.svg';
import './App.css';
import { Hero } from './components/hero/hero';
import { SubHero } from './components/sub-hero/sub-hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <SubHero />
    </div>
  );
}

export default App;
