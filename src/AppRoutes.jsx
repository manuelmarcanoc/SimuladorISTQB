import React from 'react';
import { useRoutes } from 'react-router-dom';
import App from './App';
import { ROUTER_ROUTES } from './routes';

const children = ROUTER_ROUTES.map(({ path, element }) =>
  path === '/' ? { index: true, element } : { path: path.replace(/^\//, ''), element }
);

export default function AppRoutes() {
  return useRoutes([{ path: '/', element: <App />, children }]);
}
