const domain =
  process.env.SHOPIFY_STORE_DOMAIN!;

const storefrontToken =
  process.env.SHOPIFY_STOREFRONT_TOKEN!;

const endpoint = `https://${domain}/api/2025-04/graphql.json`;

export async function shopifyFetch({
  query,
  variables = {}
}: {
  query: string;
  variables?: any;
}) {
  const result = await fetch(endpoint, {
    method: "POST",

    headers: {
      "Content-Type":
        "application/json",

      "X-Shopify-Storefront-Access-Token":
        storefrontToken
    },

    body: JSON.stringify({
      query,
      variables
    }),

    next: {
      revalidate: 60
    }
  });

  return result.json();
}

export async function getProduct(handle: string) {
  const query = `
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description

      featuredImage {
        url
      }

      images(first: 20) {
        edges {
          node {
            url
          }
        }
      }

      variants(first: 50) {
        edges {
          node {
            id
            title

            price {
              amount
            }

            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`;

  const response = await shopifyFetch({
    query,
    variables: { handle }
  });

  return response.data.product;
}

  const response =
    await shopifyFetch({ query });

  return response.data.products.edges;
}

export async function getCollection(
  handle: string
) {
  const query = `
  query Collection($handle:String!){
    collection(handle:$handle){
      title

      products(first:50){
        edges{
          node{
            id
            title
            handle

            featuredImage{
              url
            }

            priceRange{
              minVariantPrice{
                amount
              }
            }
          }
        }
      }
    }
  }
`;

  const response = await shopifyFetch({
    query,
    variables: { handle }
  });

  return response.data.collection;
}
