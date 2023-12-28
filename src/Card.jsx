import React from 'react'
// ----everything here will render everytime card component gets called------
export default function Card(props) {
    return (
        <div className='card'>
            <div className='card-item card-img'><img src={props.image} alt="" /></div>
            <div className="card-item card-description">
                <img src="location-icon.png" className='location-icon' />
                <span className='country'>{props.country}</span>
                <span className="gray">View on Google Maps</span>
                <h1 className="location">{props.location}</h1>
                <h4 className="date">{props.date}</h4>
                <p className="card-text">{props.about}</p>
            </div>
        </div>
    )
}