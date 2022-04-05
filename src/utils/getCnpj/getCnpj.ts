import axios from 'axios';

/**
 * Gets CNPJ informations from Receita WS API.
 * @since 0.9.0
 * @param {string} cnpj CNPJ.
 * @returns {Promise<Object>} Promise for CNPJ informations.
 */
async function getCnpj(cnpj: string): Promise<Object> {
  const rawCnpj = cnpj.replace(/[^\d]+/g, '');

  const { data } = await axios.get(
    `https://www.receitaws.com.br/v1/cnpj/${rawCnpj}`,
  );

  return data;
}

export { getCnpj };
