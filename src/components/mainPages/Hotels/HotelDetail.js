import React, {  useContext } from 'react'
import { useParams } from 'react-router'

import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import { useHistory } from 'react-router'

export default function HotelDetail() {
    const id = useParams()
    const history = useHistory()
    const {state,dispatch} = useContext(UserContext)
    const buttonHandler = (id) => {
        state.isLoggedIn ?
        history.push(`/booking/${id}`)
        :
        alert('Please log in to continue')
       
    }  
    return (
    <>
     {
             state.allHotels.filter(x => x._id === id.id)
             .map(x => 
        <div className="hotelDetail-container">
            <div className="image-side">
                <img src={x.image} alt="hotel -image" />
            </div>
            <div className="detail-side">
                <p className="category">{x.category}</p>
                <h1>{x.hotel}</h1>
                <div className="rating">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i>
                    <span> Rating from 30 reviews</span>
                </div>
                <div className=" facilty-icon">
                    <span>Wifi</span>
                    <span>AC</span>
                    <span>Shower</span>
                </div>
                <div className="price">
                    <span>$  </span><h2 style={{ display: 'inline-block', fontWeight: '700' }}>
                        {x.price}</h2>
                </div>
                <div className="description">
                    <p>{x.description}</p>
                </div>
                <div className="reserve" >

                <button onClick={() => buttonHandler(x._id)}>Make Reservation</button>
                </div>
            </div>
        </div>
          )}
    </>
    )
}
