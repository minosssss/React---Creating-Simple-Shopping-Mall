import {QueryClient,} from "react-query";
import { request, RequestDocument } from "graphql-request";

type anyObj = { [key: string]: any }
const BASE_URL = '/';


export const GetClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 1000 * 60 * 60 * 24,
          staleTime: 1000 * 60, //
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
        }
      }
    });
    return client;
  };
})();

export const RestFetcher = async ({method, path, body, params,}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: anyObj;
  params?: anyObj;
}) => {
  try {
    const url = `${BASE_URL}${path}`
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL,
      }
    }
    const res = await fetch(url, fetchOptions);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
export const GraphqlFetcher = (query: RequestDocument, variables = {}) =>
  request(`/`, query, variables, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': BASE_URL,
  })

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
  CART: 'CART',
}
