import { ApiConfig, Variables } from "@common/types/api";
import { getProductQuery } from "@framework/utils";
import { Product as ShopifyProduct } from "@framework/schema"

type FetchType = {
  productByHandle: ShopifyProduct
}

const getProduct = async (options: {
  config: ApiConfig,
  variables: Variables

}): Promise<any> => {
  const { config, variables } = options
  const { data } = await config.fetch<any>({
    query: getProductQuery,
    url: config.apiUrl,
    variables
  })

  return {
    product: {
      name: "MY super product",
      slug: "my-super-product"
    }
  }
}

export default getProduct;