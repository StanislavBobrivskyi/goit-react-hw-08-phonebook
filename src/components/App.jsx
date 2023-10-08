import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/auth/authOperation';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { PrivateRoute } from './PrivateRoute';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
const Home = lazy(() => import('../Pages/Home'));
const Register = lazy(() => import('../Pages/Register'));
const Login = lazy(() => import('../Pages/Login'));
const Contacts = lazy(() => import('../Pages/Contacts'));
const NotFound = lazy(() => import('../Pages/NotFound'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
