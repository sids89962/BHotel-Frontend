import React, { createContext, useReducer, useEffect, useState } from 'react'
import axios from 'axios'


const initialState = {
    email: '',
    bookingHotelDetails: '',
    allBooking: [],
    allHotels: [],
    isLoggedIn: false,
    isAdmin: false,
    token: ''

}

const UserReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_USER":
            return {
                ...state,
                email: payload,
                isLoggedIn: true
            }
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true
            }
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                isAdmin: false,
                token: ''
            }
        case "SET_ADMIN":
            return {
                ...state,
                isAdmin: true
            }
        case "GET_ALL_HOTELS":
            return {
                ...state,
                allHotels: payload
            }
        case "GET_ALL_BOOKING":
            return {
                ...state,
                allBooking: payload
            }
        case "RESET_USER":
            return {
                userInfo: ''
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: payload
            }
        default:
            return { ...state };
    }
}
export const UserContext = createContext()
export const UserProvider = (props) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const [token, setToken] = useState()
    useEffect(() => {
        const getAllHotels = async () => {
            const hotels = await axios.get('/api/hotels')
            dispatch({ type: 'GET_ALL_HOTELS', payload: hotels.data })
        }
        getAllHotels()
    }, [])
    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if (firstLogin) {
            const refreshToken = async () => {
                try {
                    const res = await axios.get('/users/refresh_token')
                    dispatch({ type: 'SET_TOKEN', payload: res.data.accesstoken })
                    setTimeout(() => {
                        refreshToken()
                    }, 10 * 60 * 1000)
                }
                catch (err) {
                    console.log(err)
                }
            }
            refreshToken()
        }
    }, [])
    return (
        <div>
            <UserContext.Provider value={{ state, dispatch }}>
                {props.children}
            </UserContext.Provider>
        </div>
    )
}
