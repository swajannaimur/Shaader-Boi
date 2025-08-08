import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layouts/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AllRecipes from './Pages/AllRecipes/AllRecipes.jsx';
import AddRecipe from './Pages/AddRecipe/AddRecipe.jsx';
import MyRecipes from './Pages/MyRecipies/MyRecipes.jsx';
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Loader from './Components/Loader/Loader.jsx';
import RecipeDetails from './Pages/RecipeDetails/RecipeDetails.jsx';
import AuthProvider from './Components/Auth Context/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('https://my-apple-recipe-server.vercel.app/recipes'),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home
      },
      {
        path: '/allRecipes',
        loader: () => fetch('https://my-apple-recipe-server.vercel.app/recipes'),
        hydrateFallbackElement: <Loader></Loader>,
        Component: AllRecipes
      },
      {
        path: '/recipe/:id',
        loader: ({ params }) => fetch(`https://my-apple-recipe-server.vercel.app/recipes/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: <PrivateRoute>
          <RecipeDetails></RecipeDetails>
        </PrivateRoute>
      },
      {
        path: '/addRecipe',
        element: <PrivateRoute>
          <AddRecipe></AddRecipe>
        </PrivateRoute>
      },
      {
        path: '/myRecipes',
        element: <PrivateRoute>
          <MyRecipes></MyRecipes>
        </PrivateRoute>
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
