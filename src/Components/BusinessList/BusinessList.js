import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'

function BusinessList(props) {
    const restaurants=[];
    for(let i = 0; i < props.businesses.length; i++) {
        restaurants.push(<Business key={props.businesses[i].name} business={props.businesses[i]} />);
    }
    console.log(restaurants);
    return (
    <div className='businessList'>
        {restaurants.length > 0 ? (restaurants) : (<p className="noResult">No results were found!</p>)}
    </div>
    );
}

export default BusinessList;