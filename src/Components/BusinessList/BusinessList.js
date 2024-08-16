import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'

const numRestaurant=10;

function BusinessList(props) {
    const restaurants=[];
    for(let i = 0; i < numRestaurant; i++) {
        restaurants.push(<Business key={i+1} business={props.businesses[0]} />);
    }
    return (
    <div className='businessList'>
        {restaurants}
    </div>
    );
}

export default BusinessList;