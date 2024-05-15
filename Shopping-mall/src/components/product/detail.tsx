import React from "react";
import {PRODUCT} from "../../graphql/products";

const ProductDetail = ({
  item: {
    id,
    imageUrl,
    price,
    title,
    description,
    createdAt
  }
} : {
  item: PRODUCT
}
) => (
    <div className='products-detail'>
      <p className='products-detail__title'>{title}</p>
      <span className='products-detail__price'>${price}</span>
      <p className='products-detail__description'>{description}</p>
      {/*<p className='products-detail__category'>{category}</p>*/}
      {/*<img className='products-detail__image' src={image}/>*/}
      {/*<span className='products-detail__rating'>{rate}</span>*/}
    </div>
  )

export default  ProductDetail