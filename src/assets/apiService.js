import axios from "axios";

export const submitReferForm = async (payload) => {
  if (!payload) return;

  try {
    const response = await axios.post('/api/refer-submit', payload, {
      baseURL: import.meta.env.VITE_API_URL,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // rethrow the error so it can be handled by the caller
  }
};