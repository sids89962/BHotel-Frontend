import React, { useContext } from 'react'
import {Switch , Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import CreateBooking from './Booking/CreateBooking'
import History from './history/History'

import HomePage from './Home/HomePage'
import HotelDetail from './Hotels/HotelDetail'
import HotelPage from './Hotels/HotelPage'
import NotFound from '../utils/not_Found/NotFound'
import { UserContext } from '../../context/UserContext'
import Loading from '../utils/loading/Loading'
export default function Pages() {
    const {state,dispatch} = useContext(UserContext)
    
    return (
        <Switch>
           <Route path="/"  component={state.isAdmin ? History : HomePage} exact></Route>
           <Route path="/hotels/city/:city" component={HotelPage} exact></Route>
           <Route path="/hotels/:id" exact component={HotelDetail}></Route>

           <Route path="/booking/:id" exact component={CreateBooking}></Route>
           <Route path="/history" exact component={state.isLoggedIn ? History : Loading}></Route>

           <Route path="/login" exact component={state.isLoggedIn ? Loading :Login} />
           <Route path="/register" exact component={state.isLoggedIn ? Loading : Register}/>
        </Switch>
    )
}
