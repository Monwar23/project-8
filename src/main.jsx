import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Pages/Home';
import ListedBook from './Pages/ListedBook';
import PageToRead from './Pages/PageToRead';
import ErrorPage from './Pages/ErrorPage';
import BookDetails from './Pages/BookDetails';
import { Toaster } from 'react-hot-toast';
import PageToWishlist from './Pages/PageToWishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('data.json')   
      },
      {
        path:"/book/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/data.json')
      },
      {
        path:"/listedBooks",
        element:<ListedBook></ListedBook>,
        loader:()=>fetch('/data.json')
      },
      {
        path:"/PagesToRead",
        element:<PageToRead></PageToRead>,
        loader:()=>fetch('/data.json')
      },
      {
        path:"/PagesToWishlist",
        element:<PageToWishlist></PageToWishlist>,
        loader:()=>fetch('/data.json')
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>,
)
