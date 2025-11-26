import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import MainPage from "./components/MainPage/MainPage";
import BookDetails from "./components/BookDtails/BookDetails";
import Checkout from "./components/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/LoginPage/LoginPage";
import Cart from "./components/Cart/Cart";
import Register from "./components/RegisterPage/RegisterPage";
import AdminPage from "./components/Admin/AdminPage"
import { CartProvider } from "./utilities/CartContext";
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
