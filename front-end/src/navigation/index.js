import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import HomeScreen from "../screens/homeScreen/ index";
import ProductDetail from "../screens/productDetailsScreen";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Route>
  )
);