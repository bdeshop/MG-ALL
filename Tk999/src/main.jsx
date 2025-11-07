
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router.jsx";
import LanguageProvider from "./Context/LanguageContext";
import { Provider } from "react-redux";
import store from "./store/store";

createRoot(document.getElementById("root")).render(

  <Provider store={store}>
   <LanguageProvider>
      <RouterProvider router={Router} />
    </LanguageProvider>
  </Provider>
  

);
