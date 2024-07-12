import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner/Banner';
import SearchBar from './Components/SearchBar/SearchBar';
import BusinessList from './Components/BusinessList/BusinessList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <SearchBar />
        <BusinessList />
      </header>
    </div>
  );
}

export default App;
