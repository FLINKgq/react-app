 import { Provider } from 'react-redux'
 import store from '../store/store'
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
 
 const router = createBrowserRouter([
   {
     path: '/',
     element: <App />,
   },
 ]);
 
const root = ReactDOM.createRoot(document.getElementById('OnTop') as HTMLElement);
root.render(
  <StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </StrictMode>
);
 