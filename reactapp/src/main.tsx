 
 import App from './App.js'
 import { Provider } from 'react-redux'
 import store from './store'
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 import ReactDOM from 'react-dom/client';
 const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/counter', element: <Counter /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
);
 