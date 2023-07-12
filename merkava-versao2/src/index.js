import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import  {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './routes/Home';
import NossoProduto from './routes/NossoProduto';
import ErrorPage from "./routes/ErrorPage";
import CaixaFerramenta5gvt from "./routes/CaixaFerramenta5gvt";
import CaixaFerramenta3gvt from "./routes/CaixaFerramenta3gvt";
import CaixaFerramenta7gvt from "./routes/CaixaFerramenta7gvt";
import CaixaFerramenta9gvt from "./routes/CaixaFerramenta9gvt";
import PersonalizarProduto from './routes/PersonalizarProduto';
import EtapaOne from './components/PersonalizarProduto/EtapaOne';
import EtapaTwo from './components/PersonalizarProduto/EtapaTwo';
import EtapaThree from './components/PersonalizarProduto/EtapaThree';
import EtapaEnd from './components/PersonalizarProduto/EtapaEnd';

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
          path:"/CaixaFerramenta5gvt",
          element: <CaixaFerramenta5gvt/>,
          errorElement: <ErrorPage />
        },
        {
          path:"/CaixaFerramenta3gvt",
          element: <CaixaFerramenta3gvt/>,
          errorElement: <ErrorPage />
        },
        {
          path:"/CaixaFerramenta7gvt",
          element: <CaixaFerramenta7gvt/>,
          errorElement: <ErrorPage />
        },
        {
          path:"/CaixaFerramenta9gvt",
          element: <CaixaFerramenta9gvt/>,
          errorElement: <ErrorPage />
        },
        {
          path:"/PersonalizarMeuProduto",
          element: <PersonalizarProduto/>,
          errorElement: <ErrorPage />
        },
        {
          path:"/EtapaOne",
          element: <EtapaOne/>,
          errorElement: <ErrorPage />
        }, 
         {
          path:"/EtapaTwo",
          element: <EtapaTwo/>,
          errorElement: <ErrorPage />
        },
        {
          path:"/EtapaThree",
          element: <EtapaThree/>,
          errorElement: <ErrorPage />
        },
        {
          path:"/EtapaEnd",
          element: <EtapaEnd/>,
          errorElement: <ErrorPage />
        }
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
