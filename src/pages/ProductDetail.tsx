import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { products } from "../data/mockData";
import { ArrowLeft, Check, ShoppingBag, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "../lib/CartContext";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addToCart } = useCart();

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/#products" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-rose-400 mb-12 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Trở lại danh sách
        </Link>

        <div className="bg-white border-y border-zinc-100 sm:border sm:border-rose-100">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative flex flex-col h-[500px] lg:h-auto bg-[#FDE2E4]">
              <div className="relative flex-1">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={product.images[activeImageIndex]} 
                    alt={`${product.name} - ảnh ${activeImageIndex + 1}`} 
                    referrerPolicy="no-referrer"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-cover"
                  />
                </AnimatePresence>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1 text-[9px] font-bold text-rose-500 uppercase tracking-widest">
                  {product.category}
                </div>
              </div>
              {product.images.length > 1 && (
                <div className="p-4 flex justify-center gap-4 bg-white/50 backdrop-blur-sm border-t border-rose-100">
                  {product.images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 border-2 transition-colors ${activeImageIndex === idx ? 'border-rose-400' : 'border-transparent hover:border-rose-200'}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-l-0 lg:border-l border-rose-50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-2">{product.name}</h1>
                <p className="text-xl font-medium text-rose-400 mb-6 font-serif italic">{product.price}</p>
                
                <p className="text-zinc-500 leading-relaxed mb-10 text-sm">
                  {product.description}
                </p>

                <div className="space-y-10">
                  {/* Features */}
                  <div>
                    <h3 className="text-[10px] font-bold text-zinc-900 uppercase tracking-[0.2em] border-b border-zinc-100 pb-3 mb-4">Đặc điểm nổi bật</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs text-zinc-600">
                          <Check size={14} className="text-rose-400 mr-3 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Shades (if available) */}
                  {product.shades && (
                    <div>
                      <h3 className="text-[10px] font-bold text-zinc-900 uppercase tracking-[0.2em] border-b border-zinc-100 pb-3 mb-4">Bảng màu</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.shades.map((shade, idx) => (
                          <div key={idx} className="text-[10px] uppercase font-bold text-zinc-600 px-4 py-2 bg-zinc-50 border border-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100 hover:border-rose-300 cursor-pointer">
                            {shade}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Usage & Specs */}
                  <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-rose-50">
                    <div>
                      <h3 className="text-[10px] font-bold text-zinc-900 uppercase tracking-[0.2em] mb-4">Hướng dẫn</h3>
                      <ul className="list-disc pl-4 space-y-2 text-xs text-zinc-600 leading-relaxed">
                        {product.usage.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ul>
                    </div>
                    {product.specs && (
                      <div>
                        <h3 className="text-[10px] font-bold text-zinc-900 uppercase tracking-[0.2em] mb-4">Thông tin</h3>
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          {product.specs}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => addToCart(product.id)}
                    className="flex-1 px-8 py-4 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-rose-400 transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <ShoppingBag size={14} className="mr-2" /> Thêm Vào Giỏ Hàng
                  </button>
                  <a href="/#contact" className="px-8 py-4 bg-white text-zinc-900 text-[10px] font-bold border border-zinc-200 uppercase tracking-widest hover:border-rose-400 hover:text-rose-400 transition-colors flex items-center justify-center text-center">
                    Nhận Tư Vấn
                  </a>
                </div>

                <div className="mt-8 flex items-center justify-center text-[10px] uppercase tracking-widest text-zinc-400 gap-2">
                  <ShieldCheck size={14} className="text-rose-400" /> Cam kết chính hãng 100%
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
