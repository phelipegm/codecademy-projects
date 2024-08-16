import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className='mainContainer'>
            <form>
                <div>
                    <input className="secondaryButton" type="submit" value="Best Match" />
                    <input className="secondaryButton" type="submit" value="Highest Rated" />
                    <input className="secondaryButton" type="submit" value="Most Reviewed" />
                    <hr className='horizontalLine'></hr>
                </div>
                <div>
                    <input className="inputText" type="text" placeholder="Search businesses"/>
                    <input className="inputText" type="text" placeholder="Where?"/>
                </div>
                <div>
                    <input className="mainButton" type="submit" value="Let's Go" />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;