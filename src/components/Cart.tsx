import { useCart } from "../lib/CartContext";
import { products } from "../data/mockData";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export function Cart() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    setIsCartOpen(false);
    navigate("/thank-you");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-[70] flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-rose-100">
              <h2 className="text-lg font-serif font-semibold text-zinc-900 flex items-center gap-2">
                <ShoppingBag size={20} /> Giỏ hàng ({items.length})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-zinc-500 hover:text-rose-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-zinc-500">
                  <ShoppingBag size={48} className="text-zinc-200 mb-4" />
                  <p className="text-sm">Giỏ hàng của bạn đang trống</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-xs font-bold text-rose-400 uppercase tracking-widest hover:text-rose-500 underline underline-offset-4"
                  >
                    Tiếp tục mua sắm
                  </button>
                </div>
              ) : (
                items.map((item) => {
                  const product = products.find((p) => p.id === item.productId);
                  if (!product) return null;
                  return (
                    <div key={item.productId} className="flex gap-4 items-center">
                      <div className="w-20 h-20 bg-[#FDE2E4] p-1 shrink-0 rounded-sm">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover rounded-sm" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-bold uppercase text-zinc-800 line-clamp-1">{product.name}</h3>
                        <p className="text-xs text-rose-400 mt-1 font-semibold">{product.price}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-zinc-200 rounded-sm">
                            <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="p-1 text-zinc-500 hover:bg-zinc-100">
                              <Minus size={14} />
                            </button>
                            <span className="text-xs font-semibold px-2 w-6 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="p-1 text-zinc-500 hover:bg-zinc-100">
                              <Plus size={14} />
                            </button>
                          </div>
                          <button onClick={() => removeFromCart(item.productId)} className="text-[10px] uppercase text-zinc-400 underline hover:text-rose-400">
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-rose-100 bg-zinc-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-zinc-600 font-medium">Tổng cộng</span>
                  <span className="text-lg font-serif font-bold text-rose-500">
                    {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(cartTotal)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-zinc-900 text-white py-4 text-xs uppercase tracking-widest font-bold hover:bg-rose-400 transition-colors shadow-lg hover:shadow-rose-400/30"
                >
                  Đặt Mua Ngay
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
