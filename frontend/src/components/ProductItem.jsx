import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link, Links} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext)

  return (

    // jis bhi product ki id yaha aye gi us product ke details ka alag page khul jayega
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>

        <div className='overflow-hidden'>

            {/* hum ne products naam ke array mai jo objects store kiye hai inke andar image key ke andar phir se array store kiya hai us array ki first image ko yaha dikhna hai */}
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />

        </div>

        <p className='pt-3 pb-1 text-sm'>{name}</p>

        <p className='text-sm font-medium'>{currency}{price}</p>
    
    </Link>
  )
}

export default ProductItem
