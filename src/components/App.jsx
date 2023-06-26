import { Routes, Route, Navigate } from 'react-router-dom';
import Contacts from 'pages/contacts/Contacts';
import Layout from './Layout/Layout';
import css from './App.module.css';
import Register from 'pages/register/Register';
import Login from 'pages/login/Login';
import Home from 'pages/Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUserThunk } from 'redux/AuthSlice/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
