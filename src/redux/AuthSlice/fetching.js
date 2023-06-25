import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = async user => {
  const { data } = await axios.post('/users/signup', user);

  return data;
};

export const login = async user => {
  const { data } = await axios.post('/users/login', user);
  console.log(data);

  return data;
};

export const logOut = async user => {
  const { data } = await axios.post('/users/logout', user);
  console.log(data);

  return data;
};
