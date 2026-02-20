import React, { useContext } from 'react'
import Title from './Title'
import {ShopContext } from '../context/ShopContext'

const LatestCollection = () => {    
    //const [latestProducts, setLatestProducts] = useState([]);

    return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-black'>
            Elevate every day with our tastiest charcuterie boards.
        </p>
        </div>
    </div>
    )
}

export default LatestCollection