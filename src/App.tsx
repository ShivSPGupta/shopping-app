import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductListingWrapper from "./pages/ProductListing";
import Cart from "./pages/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <nav className="p-4 bg-gray-200 flex justify-between">
            <Link to="/">Products</Link>
            <Link to="/cart">Cart</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ProductListingWrapper />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;