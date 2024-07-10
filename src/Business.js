import React from 'react';
import pizza from './pizza.png'

const business = {
    image: pizza,
    name: 'MarginOTTO Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bordertown',
    state: 'NY',
    zipcode: '10101',
    category: 'ITALIAN',
    rating: 4.5,
    reviewCount: 90
}

function Business() {
    return (
        <div>
            <img src={business.image} width="200px" height="200px" />
            <p>{business.name}</p>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state}</p>
            <p>{business.zipcode}</p>
            <p>{business.category}</p>
            <p>{business.rating} stars</p>
            <p>{business.reviewCount} reviews</p>
        </div>
    );
}

export default Business;