import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'
import Loading from '../utils/loading/Loading'
export default function Header() {
  const {state,dispatch} = useContext(UserContext)
  const token = state.token
  useEffect(() => {
      if(token){
          const getUser = async () => {
              try{
                  const res = await axios.get('/users/infor',{
                      headers: {Authorization :token}
                  })
                 
                  dispatch({type:'LOGIN'})
                  // res.data.role ===1 ? setIsAdmin(true) : setIsAdmin(false)
                  if(res.data.role ===1) {
                      dispatch({type:'SET_ADMIN'})
                  }
                 
              }catch(err){
                  
                  console.log(err)
              }
          }
           getUser()
      }
  },[token])

  

  const logoutUser =async () => {
      try {
          await axios.get('/users/logout')
          localStorage.removeItem('firstLogin')
           dispatch({type:"RESET"})
          
          window.location.href = "/"
      } catch (err) {
          console.log(err)
      }
  }
 
    return (
        <header>
            
            <nav className="navbar">
                <div className="brand">
                    <Link to="/" className="anchor"> <h4>BHotel</h4></Link>
                </div>
                <div className="menu" style={{ display: 'flex', alignItems: 'center' }}>         
                {    state.isLoggedIn
                    ?  (<>
                    <Link to="/history" className="anchor" style={{ marginRight: '20px' }}>History</Link>
                    <Link to="/login" className="anchor" onClick={logoutUser}><p>Logout</p></Link>       
                  </>)
                    : (<Link to="/login" className="anchor"><p>Login</p></Link>)               
                    }   
                </div>
            </nav>
        </header>
    )
}

