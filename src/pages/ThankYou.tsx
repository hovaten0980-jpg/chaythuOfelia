import { Link } from "react-router-dom";
import { CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useEffect, useState } from "react";

export function ThankYou() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // stop confetti after 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-[#FFF0F1] relative overflow-hidden">
      {showConfetti && <Confetti width={width} height={height} colors={['#fb7185', '#fda4af', '#fecdd3', '#000000']} recycle={false} numberOfPieces={300} />}
      
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[50%] bg-pink-100 rounded-full blur-[100px] opacity-70"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-rose-200 rounded-full blur-[100px] opacity-40"></div>

      <div className="max-w-xl w-full mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="bg-white/90 backdrop-blur-xl p-10 md:p-14 shadow-2xl border border-rose-100/50 rounded-2xl relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
              className="w-20 h-20 bg-rose-400 rounded-full flex items-center justify-center shadow-xl shadow-rose-200 border-4 border-white"
            >
              <CheckCircle2 size={40} className="text-white" />
            </motion.div>
          </div>

          <div className="mt-8">
            <p className="text-rose-400 uppercase tracking-[0.2em] text-[10px] font-bold mb-2">Shopping Successful</p>
            <h1 className="text-3xl md:text-5xl font-serif text-zinc-900 mb-6 antialiased leading-tight">
              Cảm Ơn Bạn <br /> Đã Tin Tưởng
            </h1>
            
            <div className="w-16 h-px bg-rose-200 mx-auto mb-6"></div>

            <p className="text-zinc-500 mb-10 text-sm leading-relaxed max-w-sm mx-auto">
              Đơn hàng của bạn đã được ghi nhận. Chuyên viên của OFÉLIA sẽ liên hệ lại với bạn trong thời gian sớm nhất để xác nhận đơn hàng và tư vấn thêm (nếu cần).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#products" 
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-bold text-[11px] uppercase tracking-widest hover:bg-rose-400 transition-all duration-300 rounded-full shadow-lg hover:translate-y-[-2px]"
              >
                <ShoppingBag size={14} /> Tiếp Tục Mua Sắm
              </Link>
              <Link 
                to="/" 
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-200 text-zinc-800 font-bold text-[11px] uppercase tracking-widest hover:border-rose-400 hover:text-rose-400 transition-all duration-300 rounded-full hover:bg-rose-50"
              >
                Về Trang Chủ <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
