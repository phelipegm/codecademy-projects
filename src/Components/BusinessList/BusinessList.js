import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'

const numRestaurant=10;

function BusinessList() {
    const restaurants=[];
    for(let i = 0; i < numRestaurant; i++) {
        restaurants.push(<Business key={i+1} />);
    }
    return (
    <div className='businessList'>
        {restaurants}
    </div>
    );
}

export default BusinessList;