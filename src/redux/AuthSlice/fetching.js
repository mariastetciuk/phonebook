// import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const registerUser = async user => {
//   const { data } = await axios.post('/users/signup', user);
//   token.set(data.token);

//   return data;
// };

// export const login = async user => {
//   const { data } = await axios.post('/users/login', user);
//   token.set(data.token);

//   return data;
// };

// export const logOut = async () => {
//   const { data } = await axios.post('/users/logout');
//   token.unset();

//   return data;
// };

// export const currentUser = async currentToken => {
//   token.set(currentToken);
//   const { data } = await axios.get('/users/current');
//   // console.log(data);
//   return data;
// };
