import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css';



const ProductCard = () => {
  return (
    <div className={styles.card}>
        Product Card
        <AddToCart/>
        <div className=''>test</div>
    </div>
  )
}

export default ProductCard
