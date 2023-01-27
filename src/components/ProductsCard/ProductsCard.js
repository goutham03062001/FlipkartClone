import React from 'react'
import classes from "./products_card.module.css";

const ProductsCard = (props) => {
  return (
    <div className={classes.cardBackground}>
      {props.data.title}
    </div>
  )
}

export default ProductsCard