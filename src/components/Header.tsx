import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../lib/CartContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, setIsCartOpen } = useCart();
  
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-semibold tracking-[0.2em] uppercase text-rose-400">
              OFÉLIA
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/#about" className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest hover:text-rose-400 transition-colors">Về Chúng Tôi</a>
            <a href="/#products" className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest hover:text-rose-400 transition-colors">Sản Phẩm</a>
            <a href="/#why-us" className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest hover:text-rose-400 transition-colors">Điểm Nổi Bật</a>
            <a href="/#process" className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest hover:text-rose-400 transition-colors">Quy Trình</a>
            <a href="/#testimonials" className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest hover:text-rose-400 transition-colors">Đánh Giá</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-zinc-500 hover:text-rose-400 transition-colors"
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-rose-400 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
            <a href="/#contact" className="px-5 py-2 bg-rose-400 text-white text-[10px] font-bold uppercase tracking-tighter rounded-full hover:bg-rose-500 transition-all shadow-sm">
              Nhận Tư Vấn
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-zinc-500 hover:text-rose-400 transition-colors"
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-rose-400 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-500 hover:text-rose-400 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-rose-50">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <a href="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-xs uppercase tracking-widest font-medium text-zinc-800 hover:bg-rose-50 hover:text-rose-400">Về Chúng Tôi</a>
            <a href="/#products" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-xs uppercase tracking-widest font-medium text-zinc-800 hover:bg-rose-50 hover:text-rose-400">Sản Phẩm</a>
            <a href="/#why-us" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-xs uppercase tracking-widest font-medium text-zinc-800 hover:bg-rose-50 hover:text-rose-400">Điểm Nổi Bật</a>
            <a href="/#contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 mt-4 text-center bg-rose-400 text-white text-xs uppercase font-bold tracking-widest rounded-sm">
              Nhận Tư Vấn Ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
