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
const registerUser = (username, email, password) =>
  axiosClient.post('/auth/local/register', {
    username: username,
    email: email,
    password: password,
  });
const signIn = (email, password) =>
  axiosClient.post('/auth/local', {
    identifier: email,
    password: password,
  });
const addToCart = (data, jwt) =>
  axiosClient.post('/user-carts', data, {
    headers: {
      Authorization: 'Bearer ' + jwt,
    },
  });
const getCartItems = (userId, jwt) =>
  axiosClient
    .get(
      '/user-carts?filters[userId][$eq]=' +
        userId +
        '&[populate][products][populate][image][populate][0]=url',
      {
        headers: {
          Authorization: 'Bearer ' + jwt,
        },
      }
    )
    .then((resp) => {
      const data = resp.data.data;
      const cartItemsList = data.map((item, index) => ({
        name: item.attributes.products?.data[0]?.attributes.name,
        quantity: item.attributes.quantity,
        amount: item.attributes.amount,
        image:
          item.attributes.products?.data[0].attributes?.image?.data[0]
            ?.attributes?.url,
        actualPrice: item.attributes.products?.data[0]?.attributes?.mrp,
        id: item.id,
        product: item.attributes.products?.data[0].id,
      }));

      return cartItemsList;
    });

export default {
  getCategory,
  getSlider,
  getCategoryLiist,
  getAllProducts,
  getAllProductByCategory,
  registerUser,
  signIn,
  addToCart,
  getCartItems,
};
