import React, { useContext, useState } from 'react'
import CategoryCard from './CategoryCard'
// import { UserContext } from '../context/UserContext'
export default function CategorySection() {

    // const { state, dispatch } = useContext(UserContext)
    // const [category, setCategory] = useState()
    // useEffect(() => {
    //     const uniqueList = [...new Set(state.allHotels.map(x => {return x.city}))]
    // setCategory(uniqueList)
    // })
    // console.log(category)

    // const uniqueList = [...new Set(state.allHotels.map(x => {return x.category}))]


    const travelImg = "https://images.pexels.com/photos/5137981/pexels-photo-5137981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    const travelTitle = "Travel"
    const travelDescription = "Travel with ease to your admired location"

    const businessImg = "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const businessTitle = "Business"

    const luxuryImg = "https://images.pexels.com/photos/2504911/pexels-photo-2504911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const luxuryTitle = "Luxury"

    const beachImg = "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const beachTitle = "Beach"

    return (
        <div className="category" style={{ position: 'relative', top: '70px', textAlign: 'center', marginBottom: '20px' }}>
            <div className="category-card">
                <h1>Entire City Of Choice</h1>
                <div className="container">

                    <CategoryCard img={travelImg} description={travelDescription} title={travelTitle} />
                    <CategoryCard img={beachImg} description={travelDescription} title={beachTitle} />
                    <CategoryCard img={luxuryImg} description={travelDescription} title={luxuryTitle} />
                    <CategoryCard img={businessImg} description={travelDescription} title={businessTitle} />
                </div>
            </div>
        </div>
    )
}
