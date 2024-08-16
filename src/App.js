import './App.css';
import Banner from './Components/Banner/Banner';
import SearchBar from './Components/SearchBar/SearchBar';
import BusinessList from './Components/BusinessList/BusinessList';
import pizza from './pizza.jpg'

const businesses = [
  {
    image: pizza,
    name: 'MarginOTTO Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bordertown',
    state: 'NY',
    zipcode: '10101',
    category: 'ITALIAN',
    rating: 4.5,
    reviewCount: 90
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <SearchBar />
        <BusinessList businesses={businesses} />
      </header>
    </div>
  );
}

export default App;
