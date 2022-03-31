import axios from 'axios';

async function getProductById(
  store: string,
  productId: string | number,
): Promise<Object> {
  const url = `https://${store}.myvtex.com/api/catalog_system/pub/products/search?fq=productId:${productId}`;

  const { data } = await axios.get(url);

  return data[0];
}

export default getProductById;
