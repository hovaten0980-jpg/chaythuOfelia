/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ChatBox } from "./components/ChatBox";
import { Cart } from "./components/Cart";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Policy } from "./pages/Policy";
import { ThankYou } from "./pages/ThankYou";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartProvider } from "./lib/CartContext";

// ScrollToTop component to handle navigating between pages
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/policy/:id" element={<Policy />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </main>
          <Footer />
          <ChatBox />
          <Cart />
        </div>
      </CartProvider>
    </Router>
  );
}
