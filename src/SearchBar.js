import React from 'react';

function SearchBar() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Search businesses"/>
                <input type="text" placeholder="Where?"/>
                <input type="submit" value="Let's Go" />
            </form>
        </div>
    );
}

export default SearchBar;