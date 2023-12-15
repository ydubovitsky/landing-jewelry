import logo from './logo.svg';
import './App.css';
import { Hero } from './components/hero/hero';
import { SubHero } from './components/sub-hero/sub-hero';
import { ItemFilter } from './components/item-filter/item-filter';
import { JewelryList } from './components/jewelry-list/jewelry-list';
import { Sale } from './components/sale/sale';
import FooterComponent from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Hero />
      <SubHero />
      <Sale/>
      <div className='content'>
        <ItemFilter />
        <JewelryList />
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
