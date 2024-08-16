import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    const [business, setBusiness] = useState("");
    const [location, setLocation] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [selectedSortOption, setSelectedSortOption] = useState(null);

    const handleSortOptionClick = event => {
        setSelectedSortOption(event.target.id);
        setSortOption(event.target.value);
    };

    const handleSearchBusinessChange = event => {
        setBusiness(event.target.value);
    };

    const handleSearchLocationChange = event => {
        setLocation(event.target.value);
    };

    const handleSearchClick = event => {
        console.log(`Searching Yelp with ${business}, ${location}, ${sortOption}`);
    };

    const getSortOptionColor = sortOptionId => {
        if (selectedSortOption === sortOptionId) {
            return '#C39948';
        }
        return 'white';
    }

    return (
        <div className='mainContainer'>
            <div>
                <input className="secondaryButton" style={{ color: getSortOptionColor('sort0') }} id="sort0" type="button" value="Best Match" onClick={handleSortOptionClick} />
                <input className="secondaryButton" style={{ color: getSortOptionColor('sort1') }} id="sort1" type="button" value="Highest Rated" onClick={handleSortOptionClick} />
                <input className="secondaryButton" style={{ color: getSortOptionColor('sort2') }} id="sort2" type="button" value="Most Reviewed" onClick={handleSortOptionClick} />
                <hr className='horizontalLine'></hr>
            </div>
            <div>
                <input className="inputText" type="text" placeholder="Search businesses" value={business} onChange={handleSearchBusinessChange} />
                <input className="inputText" type="text" placeholder="Where?" value={location} onChange={handleSearchLocationChange} />
            </div>
            <div>
                <input className="mainButton" type="button" value="Let's Go" onClick={handleSearchClick} />
            </div>
        </div>
    );
}

export default SearchBar;