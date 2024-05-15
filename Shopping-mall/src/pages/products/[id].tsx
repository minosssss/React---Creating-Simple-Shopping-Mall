import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {GraphqlFetcher, QueryKeys, RestFetcher} from "../../queryClients";
import React from "react";
import ProductDetail from "../../components/product/detail";
import GET_PRODUCTS, {GET_PRODUCT, PRODUCT} from "../../graphql/products";


const ProductDetailPage = () => {
  const {id} = useParams();
  const {data} = useQuery<PRODUCT>([QueryKeys.PRODUCTS, id],
    () =>
      GraphqlFetcher(GET_PRODUCT, {id})
    // RestFetcher({
    //   method : 'GET',
    //   path : `/products/${id}`,
    // })
  )
  console.log(data);
  if (!data) return null;
  return (
    <>
      <h2>상품상세</h2>
      <ProductDetail item={data}/>
    </>

  )
}
export default ProductDetailPage;