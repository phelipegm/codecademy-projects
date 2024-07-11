import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import BusinessList from './Components/BusinessList/BusinessList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <BusinessList />
      </header>
    </div>
  );
}

export default App;
