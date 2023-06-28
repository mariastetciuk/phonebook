import { Routes, Route, Navigate } from 'react-router-dom';
import Contacts from 'pages/contacts/Contacts';
import Layout from '../Layout/Layout';
import css from './App.module.css';
import Register from 'pages/register/Register';
import Login from 'pages/login/Login';
import Home from 'pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentUserThunk } from 'redux/AuthSlice/operations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { getAuth } from 'redux/selectors';
import { Dna } from 'react-loader-spinner';

export const App = () => {
  const { isLoding } = useSelector(getAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);
  return (
    <div className={css.container}>
      {isLoding && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
