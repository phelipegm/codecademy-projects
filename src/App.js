import './App.css';
import Banner from './Components/Banner/Banner';
import SearchBar from './Components/SearchBar/SearchBar';
import BusinessList from './Components/BusinessList/BusinessList';
import searchBusinesses from './utils/mockedBusinesses';
import { useState, useEffect } from 'react';

function App() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    setBusinesses(searchBusinesses("", "", "").sort((a, b) => b.rating - a.rating));
  }, []);

  const onSearchClick = (business, location, sortOption) => {
    setBusinesses(searchBusinesses(business, location, sortOption));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <SearchBar onSearchClick={onSearchClick} />
        <BusinessList businesses={businesses} />
      </header>
    </div>
  );
}

export default App;
