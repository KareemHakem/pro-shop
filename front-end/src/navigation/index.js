import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import HomeScreen from "../screens/homeScreen/ index";
import ProductDetail from "../screens/productDetailsScreen";
import CartScreen from "../screens/cartScreen";
import LoginScreen from "../screens/loginScreen";
import RegisterScreen from "../screens/registerScreen";
import ShippingScreen from "../screens/shippingScreen";
import PrivetRoutes from "../components/PrivetRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="" element={<PrivetRoutes />}>
        <Route path="/shipping" element={<ShippingScreen />} />
      </Route>
    </Route>
  )
);
