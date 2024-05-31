
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import ContextProvider from "./context/context";

import 'bootstrap/dist/css/bootstrap.css';
import { ROOT } from "./router/ROUTER";

function App() {
  const rooter = createBrowserRouter(ROOT);
  return <>
    <ContextProvider>
      <RouterProvider router={rooter} />
      </ContextProvider>
  </>;
}

export default App;