import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import  {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './routes/Home';
import NossoProduto from './routes/NossoProduto';
import ErrorPage from "./routes/ErrorPage";
import FaleConosco from './routes/FaleConosco';
const router= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
            path:"/",
            element: <Home/>,
            errorElement: <ErrorPage />
          },
          {
          path:"/NossoProduto",
          element: <NossoProduto/>,
          errorElement: <ErrorPage />
        },
        {
          path:"/FaleConosco",
          element: <FaleConosco/>,
          errorElement: <ErrorPage />
        },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
