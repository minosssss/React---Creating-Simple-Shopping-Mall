import { useQuery } from "react-query";
import {RestFetcher, QueryKeys, GraphqlFetcher} from "../../queryClients";
import ProductItem from '../../components/product/item'
import GET_PRODUCTS, {PRODUCTS} from "../../graphql/products";

const ProductList = () => {
  // const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
  //   RestFetcher({
  //     method: "GET",
  //     path: "/products",
  //   })
  // );
  const { data } = useQuery<PRODUCTS>(QueryKeys.PRODUCTS, () =>
    GraphqlFetcher(GET_PRODUCTS)
  );
  return (
  <div>
    <h2>상품목록
    <ul className="products">
      {data?.products?.map((product)=> (
          <ProductItem {...product} key={product.id} />
      ))}
    </ul>
    </h2>
  </div>);
};

export default ProductList;
