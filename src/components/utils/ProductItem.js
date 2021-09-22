import BtnRender from "./Product/BtnRender";
import { Link } from "react-router-dom";
import React from 'react'

export default function ProductItem({product, deleteProduct}) {
    return (
        <div className="card" style={{ width: "18rem" }} key={product._id}>
                                   
                                    <Link to={`/detail/${product._id}`}>  <img src={product.image} className="card-img-top" alt="..." /></Link>
                                    <div className="card-body">
                                        <Link to={`/detail/${product._id}`} className="anchor">
                                            <h5 className="card-title">{product.name.slice(0, 16) + (product.name.length > 20 ? " ..." : "")}</h5>
                                        </Link>
                                        <p className="card-text">₹ {product.price}</p>
                                        <BtnRender product={product} deleteProduct={deleteProduct} />
                                    </div>
        </div>
    )
}
