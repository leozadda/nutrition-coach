
import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
const router = createBrowserRouter([
  { 
    path: "/", 
    element: < HomePage/>
  },
  { 
    path: "/signup", 
    element: < SignUpPage/>
  },
]);


export default function App(){
  return (
    <div className="flex-1 overflow-y-auto">
      <RouterProvider router={router} />
    </div>
  );
};