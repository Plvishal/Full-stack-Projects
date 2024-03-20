const { default: axios } = require('axios');

const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api',
});

const getCategory = () => axiosClient.get('/categories?populate=*');
const getSlider = () =>
  axiosClient.get('/sliders?populate=*').then((resp) => {
    return resp.data.data;
  });
const getCategoryLiist = () =>
  axiosClient.get('/categories?populate=*').then((resp) => {
    return resp.data.data;
  });
const getAllProducts = () =>
  axiosClient.get('/products?populate=*').then((resp) => {
    return resp.data.data;
  });
const getAllProductByCategory = (category) =>
  axiosClient
    .get('/products?filters[categories][name][$in]=' + category + '&populate=*')
    .then((resp) => {
      return resp.data.data;
    });
export default {
  getCategory,
  getSlider,
  getCategoryLiist,
  getAllProducts,
  getAllProductByCategory,
};
