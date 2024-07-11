import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div>
            <form>
                <div>
                    <input type="submit" value="Best Match" />
                    <input type="submit" value="Highest Rated" />
                    <input type="submit" value="Most Reviewed" />
                </div>
                <div>
                    <input type="text" placeholder="Search businesses"/>
                    <input type="text" placeholder="Where?"/>
                </div>
                <div>
                    <input type="submit" value="Let's Go" />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;