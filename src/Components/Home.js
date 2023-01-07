import React from 'react'
import ProductCard from './ProductCard'

const Home = ({list}) => {
  return (
      <div>


{
    React.Children.toArray(list.map(product=><ProductCard item={product}/>))
}    
    </div>
)
}

export default Home