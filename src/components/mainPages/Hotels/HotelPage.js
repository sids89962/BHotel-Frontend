import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import Filter from './Filter'
import HotelList from './HotelList'

import { HotelContext } from '../../../context/HotelContext'

import axios from 'axios'
import Loading from '../../utils/loading/Loading'

export default function HotelPage() {
    const { state, dispatch } = useContext(HotelContext)
    const { city } = useParams()
    
    useEffect(() => {
        const hotelList = async () => {
            try {
                const res = await axios.get(`/api/hotels/city/${city}`)
                console.log(res.data.hotels)
                dispatch({ type: 'SET_HOTEL_LIST', payload: res.data.hotels })
                dispatch({type:'GET_CITY',payload:city})
                
            } catch (err) {
                alert(err)
            }
        }
        hotelList()
    }, [dispatch])
    return (
        <div className="grid-container">
            <div className="filter-col">
                <Filter />
            </div>
            <div className="hotelList-col">
                <h1>Avaliable Hotels</h1>
                <div className="sort">
                    <p>{state.hotelList.length} Hotels Available in {city}</p>
                    <select>

                        <option value="">Sort by price</option>
                        <option value="lowest">Low to High</option>
                        <option value="highest">High to Low</option>
                    </select>
                </div>
                {
                    state.hotelList.length === 0 ? <Loading /> :
                        <HotelList hotels={state.hotelList} />
                }
            </div>
        </div>
    )
}
