import { Routes, Route } from 'react-router-dom';
import Contacts from 'pages/contacts/Contacts';
import Layout from './Layout/Layout';
import css from './App.module.css';
import Register from 'pages/register/Register';
import Login from 'pages/login/Login';

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};
