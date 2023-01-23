import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  const responce = await axios.get(`?q=${query}`, {
    params: {
      page: page,
      key: '31643108-406f286ad01c488a7c5407e59',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return responce.data.hits;
};
