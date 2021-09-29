import React,{useState,useContext} from 'react'
import { HotelContext } from '../../../context/HotelContext'
import axios from 'axios'
export default function Filter() {
    const [type,setType] = useState('')
    const {state,dispatch} = useContext(HotelContext)
    const handleType = async (e) => {
        setType(e.target.value)

         const res = await axios.get(`/api/hotels/city/${state.city}?type=${e.target.value}`)
         dispatch({type:'SET_HOTEL_LIST',payload:res.data.hotels})
    }
    
    return (
        <div className="filter-card">
            <h3>Search room </h3>
            <p>Search available room for reservation</p>

            <div className="checkInOut">
                <div className="formgroup">
                    <label>CheckIn</label>
                    <input type="date" name="checkIn" placeholder="CheckIn" />
                </div>
                <div className="formgroup">
                    <label>CheckOut</label>
                    <input type="date" name="checkOut" />
                </div>

            </div>
            <hr></hr>
            <div className="members-count">
                <div className="member-group">
                    <div className="title">
                        <h5>Adult</h5>
                        <p>Older than 12 years</p>
                    </div>
                    <div className="counter">
                        <i className="fas fa-minus"></i> 
                        <p>2</p>
                        <i className="fas fa-plus"></i> 
                    </div>
                </div>
                <div className="member-group">
                    <div className="title">
                    <h5>Children</h5>
                        <p>0 - 12 years</p>
                    </div>
                    <div className="counter">
                    <i className="fas fa-minus"></i> 
                        <p>0</p>
                        <i className="fas fa-plus"></i> 
                    </div>

                </div>
                <div className="member-group">
                    <div className="title">
                    <h5>Rooms</h5>
                    </div>
                    <div className="counter">
                        <i className="fas fa-minus"></i> 
                        <p>1</p>
                        <i className="fas fa-plus"></i> 
                    </div>

                </div>
            </div>
            <hr></hr>
            <div className="hotelType">
            <form>
                <label>Hotel Type</label>
                <select value={type} onChange={handleType}>
                    <option value="">Hotel Type</option>
                    <option value="travel">Travel</option>
                    <option value="luxury">Luxury</option>
                    <option value="business">Business</option>
                    <option value="beach">Beach</option>
                </select>
            </form>
            </div>
            <hr></hr>
            <button>Search</button>
        </div>
    )
}
