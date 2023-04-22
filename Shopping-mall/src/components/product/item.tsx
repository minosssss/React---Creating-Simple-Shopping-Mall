import { Product } from '../../types'
export const ProductItem = (
  {
    title, 
    price, 
    description, 
    category, 
    image, 
    rating
  }:Product) => (
    <li className='products-item'>
      <p className='products-item__title'>{title}</p>
      <span className='products-item__price'>${price}</span>
      <p className='products-item__description'>{description}</p>
      <p className='products-item__category'>{category}</p>
      <img className='products-item__image' src={image} />
      <span className='products-item__rating'>{rating.rate}</span>
    </li>
  )

  export default ProductItem