import React from "react";
import {Link} from "react-router-dom";
import {PRODUCT} from "../../graphql/products";

export const ProductItem = (
  {
    id,
    imageUrl,
    price,
    title,
    description,
    createdAt
  }: PRODUCT) => (
  <li className='products-item'>
    <Link to={`/products/${id}`}>
      <p className='products-item__title'>{title}</p>
      <span className='products-item__price'>${price}</span>
      {/*<p className='products-item__description'>{description}</p>*/}
      {/*<p className='products-item__category'>{category}</p>*/}
      <img className='products-item__image' src={imageUrl}/>
      {/*<span className='products-item__rating'>{rating.rate}</span>*/}
    </Link>

  </li>
)

export default ProductItem