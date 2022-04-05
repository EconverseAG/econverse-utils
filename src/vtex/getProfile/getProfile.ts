import axios from 'axios';

/**
 * Gets current user's profile.
 * @since 0.7.0
 * @param {string} store Store's account name.
 * @returns {Object} Profile object.
 */
async function getProfile(store: string): Promise<Object> {
  const url = `https://${store}.myvtex.com/no-cache/profileSystem/getProfile`;

  const { data } = await axios.get(url);

  return data;
}

export { getProfile };
