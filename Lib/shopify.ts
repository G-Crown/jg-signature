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

export async function getProducts() {
  const query = `
    {
      products(first: 20) {
        edges {
          node {
            id
            title
            handle

            featuredImage {
              url
            }

            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const response =
    await shopifyFetch({ query });

  return response.data.products.edges;
}

export async function getCollections() {
  const query = `
    {
      collections(first: 20) {
        edges {
          node {
            id
            title
            handle
            description
          }
        }
      }
    }
  `;

  const response =
    await shopifyFetch({ query });

  return response.data.collections.edges;
}
