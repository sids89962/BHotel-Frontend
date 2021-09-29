import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import { Link } from 'react-router-dom'
import Loading from '../../utils/loading/Loading'

import './History.css'
import axios from 'axios'
export default function History() {
    const { state, dispatch } = useContext(UserContext)
    const isAdmin = state.isAdmin
    const [isAccept, setIsAccept] = useState('Take Action')
    useEffect(() => {
        if (state.token) {
            const getHistory = async () => {
                if (isAdmin) {
                    const res = await axios.get('/api/booking', {
                        headers: { Authorization: state.token }
                    })
                    dispatch({ type: "GET_ALL_BOOKING", payload: res.data })
                } else {
                    const res = await axios.get('/users/history', {
                        headers: { Authorization: state.token }
                    })

                    dispatch({ type: "GET_ALL_BOOKING", payload: res.data })
                }
            }
            getHistory()
        }
    }, [state.token, isAdmin, dispatch])
    const setStatus = async (e) => {
        setIsAccept(e.target.value)
        console.log(isAccept)
        console.log(e.target.value)

        const res = await axios.put('/api/booking/',
            { id: e.target.dataset.id, value: e.target.value }, {
            headers: { Authorization: state.token }
        })


    }

    return (

        <div className="table-container">

            <h4>All Bookings</h4>
            <div className="history-page">
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Hotel</th>
                            <th scope="col">Date of Booking</th>
                            <th scope="col">Days</th>
                            <th scope="col">Status</th>
                            {/* <th scope="col"></th> */}
                        </tr>
                    </thead>
                    {state.allBooking.length === 0 ? <Loading /> :
                        <tbody>
                            {
                                state.allBooking.Bookings.map(items => (
                                    <tr key={items._id} >
                                        <td>{items.name}</td>
                                        <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                        <td>{items.days}</td>
                                        <td className="text-center">
                                            {isAdmin ?
                                                items.isAccepted === "Pending" ?
                                                    <select className="form-select" value={isAccept} onChange={setStatus} data-id={items._id}>
                                                        <option value="">{isAccept}</option>
                                                        <option value="Accepted">Approve</option>
                                                        <option value="Declined">Decline</option>
                                                    </select> : items.isAccepted
                                                :
                                                (items.isAccepted === "Accepted"
                                                    ? <p>Accepted</p>
                                                    : items.isAccepted === "Declined"
                                                        ? <p> Declined</p>
                                                        : <p>Pending</p>)
                                            }
                                        </td>
                                        {/* <td><Link to={`/history/${items._id}`}>View</Link></td> */}
                                    </tr>
                                ))
                            }
                        </tbody>
                    }
                </table>
            </div>
        </div>
    )
}
