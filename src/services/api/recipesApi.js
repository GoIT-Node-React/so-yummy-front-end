import axios from 'axios';

export const getAllFavorites = async (page = 1, limit = 4) => {
  try {
    const { data } = await axios.get(`/favorite?page${page}&limit=${limit}`);
    return data.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const deleteFavoriteById = async id => {
  try {
    const { data } = await axios.delete(`/favorite/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
