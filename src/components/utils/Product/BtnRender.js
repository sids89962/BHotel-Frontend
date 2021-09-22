import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'



export default function BtnRender({ product, deleteProduct }) {


    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    return (
        <>
            {isAdmin ?
                <>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <Link to="/">
                                <button className="btn btn-danger admin-btn delete" style={{width:'100%'}} onClick={() => deleteProduct(product)}>Delete</button>
                            </Link>
                        </div>
                        <div className="col-md-6 text-center">
                            <Link to={`/edit_product/${product._id}`}>
                                <button className="btn btn-primary admin-btn" style={{width:'100%'}}>Edit</button>
                            </Link>
                        </div>
                    </div>



                </>
                :
                <>

                    <button className="btn btn-primary" onClick={() => addCart(product)}>
                        Add to Cart
                    </button>

                </>
            }
        </>
    )
}
