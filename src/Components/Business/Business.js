import React from 'react';
import pizza from './pizza.jpg'
import './Business.css'

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
        <div className='business'>
            <img className='image' src={business.image} />
            <p className='pizzaPlace'><b>{business.name}</b></p>
            <div className='containerInfo'>
                <div className='leftAlignment'>
                    <p className='addressInfo'>{business.address}</p>
                    <p className='addressInfo'>{business.city}</p>
                    <p className='addressInfo'>{business.state + " " +business.zipcode}</p>
                </div>
                <div className='rightAlignment'>
                    <p className='restaurantInfo' style={{color:'rgb(192,155,82)'}}><b>{business.category}</b></p>
                    <p className='restaurantInfo' style={{color:'rgb(192,155,82)'}}><b>{business.rating} stars</b></p>
                    <p className='restaurantInfo'>{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;