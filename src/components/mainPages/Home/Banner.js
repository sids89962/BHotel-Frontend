import React, { useContext,useEffect , useState} from 'react'
import axios from 'axios'
import hotspot from '../../../images/hotspot.png'
import swimming from '../../../images/swimming.png'
import dinner from '../../../images/christmas-dinner.png'
import ac from '../../../images/air-conditioner.png'
import { UserContext } from '../../../context/UserContext'
import { useHistory } from 'react-router'

export default function Banner() {
    const {state,dispatch} = useContext(UserContext)
    const [inCity, setInCity] = useState('')
    const history  = useHistory()
   
    const city = [... new Set(state.allHotels.map(x => {return x.city}))]
  
   const handleCityChange = (e) => {
        try{
         history.push(`/hotels/city/${e.target.value}`)

        }catch(err){
            alert(err.response.data.message)
        }
   }
  
    return (
        <main>
        <div className="banner">
            <div className="image">
                {/* <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="banner"></img> */}
                <div className="image-overlay">
                    <h1>Enjoy Every  <br /> Part of Travelling</h1>
                    <p>Select from a list of hotels that will never <br /> mess up your stay</p>
                </div>
            </div>


            <div className="category-bar">

                <div className="facilities">
                    <h3>Facilities</h3>
                    <div className="facilty">
                        <span><img src={hotspot} className="icon" /></span>
                        <span><img src={swimming} className="icon" /></span>
                        <span><img src={ac} className="icon" /></span>
                        <span><img src={dinner} className="icon" /></span>
                    </div>
                </div>

                <div className="for-you">
                    <h3> Hotels For You</h3>

                    <p>5 Days, 6 Nights</p>

                    <br />

                    <button>USD  $0.08</button>

                </div>
                <div className="search-bar">
                    <h3>City</h3>
                    <form>
                    <select  value={inCity} onChange={handleCityChange}>
                       <option value="">Select City </option>
                       { city.map(x =>  
                     
                          <option value={x} key={Math.random()}>{x} </option>
                       )}
                        </select>
                    </form>
                </div>

            </div>
        </div>
       
    </main>
    )
}
