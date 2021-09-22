import React,{useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import { useHistory } from 'react-router'
export default function HotelList({hotels}) {
    const {state,disptach} = useContext(UserContext)
    const history = useHistory()
    const buttonHandler = (id) => {
        state.isLoggedIn 
        ? history.push(`/booking/${id}`)
        :  alert('Please log in to continue')       
    }

    
  
    return (
        <>
        {  hotels.map(hotel =>
                <div className="hotel-card" key={hotel._id}>
                    <div className="close" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={hotel.image} alt="hotel" />
                        <div className="details">
                            <p className="price">{hotel.price}/night</p>
                            <h4>{hotel.hotel}</h4>
                            <div className="facilty-icon">
                                <span>Wifi</span>
                                <span>AC</span>
                                <span>Shower</span>
                            </div>
                        </div>
                    </div>
                    <div className="close " style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to={`/hotels/${hotel._id}`} className="anchor"><p className="room-Detail">Hotel Detail</p></Link>
                        <button onClick={() => buttonHandler(hotel._id)}>Make Reservation</button>
                    </div>
                </div>
            )
        }

    </>
    )
}
