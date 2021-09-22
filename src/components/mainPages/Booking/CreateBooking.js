import axios from 'axios'
import React,{useContext,useState} from 'react'
import { useParams } from 'react-router'
import { UserContext } from '../../../context/UserContext'

export default function CreateBooking() {
const {state,dispatch} = useContext(UserContext)
const {id} = useParams()
const hotel =  state.allHotels.filter(x => x._id === id)
const [bookingHotel,setBookingHotel ] = useState({
    name:hotel[0].hotel,
    city:hotel[0].city,
    price:hotel[0].price,
    days:'',
    date:''
})
const inputHandler = (e) => {
    const {name,value} = e.target
    setBookingHotel({...bookingHotel,[name]:value})
}

const onSubmit = async (e) => { 
    e.preventDefault();
   
    await axios.post('/api/booking',{...bookingHotel},
    {
        headers: {Authorization:state.token}
    })
    alert("You have processed your booking")
    window.location.href ="/history"
    

}
    return (
        <div className="login-container">
            
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Hotel</label>
                    <input type="text" value={bookingHotel.name}  disabled onChange={inputHandler}></input>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" value={bookingHotel.city}  disabled onChange={inputHandler}></input>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" name="price" value={bookingHotel.price} onChange={inputHandler}></input>
                </div>
                <div className="form-group">
                    <label>Days</label>
                    <input type="text" name="days" value={bookingHotel.days} onChange={inputHandler}></input>
                </div>
                <div className="form-group">
                    <label>From Date</label>
                    <input type="date" name="date" value={bookingHotel.date} onChange={inputHandler}></input>
                </div>
              <button>Book</button>
            </form>
        </div>
    )
}
