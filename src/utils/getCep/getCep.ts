import axios from 'axios';
import { ICepError, ICepInformations } from './getCep.types';

/**
 * Gets CEP informations from ViaCEP API.
 * @since 1.0.0
 * @param {string} cep CEP.
 * @returns {Promise<Object>} Promise for CEP informations.
 */
async function getCep(cep: string): Promise<ICepInformations | ICepError> {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  return data;
}

export { getCep };
