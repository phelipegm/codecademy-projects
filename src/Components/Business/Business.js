import React from 'react';
import './Business.css'

function Business(props) {
    return (
        <div className='business'>
            <img className='image' src={props.business.image} />
            <p className='pizzaPlace'><b>{props.business.name}</b></p>
            <div className='containerInfo'>
                <div className='leftAlignment'>
                    <p className='addressInfo'>{props.business.address}</p>
                    <p className='addressInfo'>{props.business.city}</p>
                    <p className='addressInfo'>{props.business.state + " " + props.business.zipcode}</p>
                </div>
                <div className='rightAlignment'>
                    <p className='restaurantInfo' style={{color:'rgb(192,155,82)'}}><b>{props.business.category}</b></p>
                    <p className='restaurantInfo' style={{color:'rgb(192,155,82)'}}><b>{props.business.rating} stars</b></p>
                    <p className='restaurantInfo'>{props.business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;