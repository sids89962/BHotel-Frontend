import React, { useContext } from 'react';
import {Route} from 'react-router-dom';
import Booking from './components/Booking';
import HotelDetail from './components/HotelDetail';
import Reservation from './components/Reservation';
import HomePage from './pages/HomePage';
import HotelList from './pages/HotelList';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import NotFound from './utils/not_Found/NotFound'
import { UserContext } from './context/UserContext';
import History from './components/mainPages/history/History';
export default function Pages() {
    const {state,dispatch} = useContext(UserContext)
    const isLogged = state.isLoggedIn
    const isAdmin = state.isAdmin
  
    return (
        <div>
            <Route path="/"  component={isAdmin ? Booking : HomePage} exact></Route>
            <Route path="/hotels" exact component={HotelList}></Route> 
            <Route path="/hotels/city/:city" exact component={HotelList}></Route> 

            <Route path="/booking/:id" exact component={Reservation}></Route>


            <Route path="/history" exact component={isLogged ? Booking : NotFound}></Route>
            <Route path="/hotels/:id" exact component={HotelDetail}></Route>       


            <Route path="/login" component={isLogged ? NotFound : LoginPage} exact></Route>
            <Route path="/register" component={isLogged ? NotFound : RegisterPage} exact></Route>
        </div>
    )
}
