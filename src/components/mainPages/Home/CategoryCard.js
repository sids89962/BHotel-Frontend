import React from 'react'

export default function CategoryCard({img,description,title}) {
    return (
        <div className="container-card">
            <div className="img-container">
                <div className="img-inner">
                    <div className="inner-skew">
                        <img src={img} />
                    </div>
                </div>
            </div>
            <div className="text-container">
                <h3>{title}</h3>
                <div>
                   {description}
                </div>
            </div>
        </div>
    )
}
