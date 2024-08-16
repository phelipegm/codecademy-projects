import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'

function BusinessList(props) {
    const restaurants=[];
    for(let i = 0; i < props.businesses.length; i++) {
        restaurants.push(<Business key={i+1} business={props.businesses[i]} />);
    }
    return (
    <div className='businessList'>
        {restaurants}
    </div>
    );
}

export default BusinessList;