import { graphql} from "msw";
import {QueryKeys} from "../queryClients";
import {v4 as uuid} from 'uuid';
import GET_PRODUCTS, {GET_PRODUCT} from "../graphql/products";

const mockProducts = Array.from({length:20}).map(
  (_, i) => ({
    id : uuid(),
    imageUrl: `https://source.unsplash.com/200x150/?nature/${i + 1}`,
    price: 50000,
    title: `임시상품${i+1}`,
    description: `임시상세내용${i+1}`,
    createAt: new Date(1715776916747+(i*1000*60*10)).toString()

  })
)
export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    console.log(mockProducts);
    return res(
      ctx.data({
        products: mockProducts
      })
    )
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {

    // const found = mockProducts.find((item) => item.id === req.variables.id);
    // console.log(mockProducts);
    // if (found) return res(ctx.data(found));
    return res(
      ctx.data(mockProducts[0])
    )
  }),
]