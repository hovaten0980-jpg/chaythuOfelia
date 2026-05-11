import { Link } from "react-router-dom";
import { products } from "../data/mockData";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export function Products() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-rose-400 mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Trở về trang chủ
          </Link>
          <span className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">Tất Cả Sản Phẩm</span>
          <h1 className="text-4xl font-serif text-zinc-900">Bộ Sưu Tập OFÉLIA</h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="group cursor-pointer block">
                <div className="aspect-square bg-[#FDE2E4] rounded-sm mb-4 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-bold text-rose-500 uppercase tracking-widest z-10">
                    {product.category}
                  </div>
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-700" 
                  />
                  {product.images[1] && (
                    <img 
                      src={product.images[1]} 
                      alt={product.name} 
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold text-zinc-800 uppercase tracking-wider mb-1 group-hover:text-rose-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-zinc-400 italic line-clamp-1 max-w-[150px]">
                      {product.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-rose-400 mt-0.5 whitespace-nowrap ml-2">{product.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
