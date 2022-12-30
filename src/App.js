
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Inventory from './components/Inventory/Inventory';
import Main from './components/Layout/Main';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
          loader: () => fetch('products.json')
        },
        { path: '/order', element: <Order></Order> },
        { path: '/inventory', element: <Inventory></Inventory> },
      ]
    },
    { path: '*', element: <div>page Not Found</div> }
  ])
  return (
    <div >

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
