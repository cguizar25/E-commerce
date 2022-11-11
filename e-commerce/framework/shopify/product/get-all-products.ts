import {
  fetchAPI,
  normalizeProduct,
  getAllProductsQuery
} from '../utils/index';
import { ProductConnection } from '../schema';
import { Product } from "@common/types/product";
import { ApiConfig } from "@common/types/api";

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery
  })
  
  const products = data.products.edges.map(({ node: product }) =>
    normalizeProduct(product)
  ) ?? []

  return products
}

export default getAllProducts;
