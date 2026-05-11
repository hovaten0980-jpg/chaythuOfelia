import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle, Shield, Award, Heart } from "lucide-react";
import { products } from "../data/mockData";
import { FeedbackForm } from "../components/FeedbackForm";

import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <div className="pt-20">
      {/* HERO SECTION (Attention) */}
      <section className="relative min-h-[90vh] flex items-center bg-[#FFF0F1] overflow-hidden" id="hero">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl flex flex-col justify-center"
            >
              <span className="inline-block text-rose-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
                Luxury Beauty
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-800 leading-[1.1] mb-6">
                Khơi Dậy <br/>
                <span className="italic text-rose-300 underline underline-offset-8 decoration-rose-200/50">Vẻ Đẹp</span> Độc Bản
              </h1>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-sm mb-8">
                Khám phá bộ sưu tập mỹ phẩm cao cấp từ OFÉLIA. Thiết kế tinh tế, chất lượng vượt trội, giúp bạn tự tin tỏa sáng mỗi ngày với nét quyến rũ độc bản.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products" className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-900 text-white text-xs uppercase tracking-widest font-bold hover:bg-rose-400 transition-all duration-300">
                  Khám Phá Ngay
                </a>
                <a href="#about" className="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-200 text-zinc-600 text-xs uppercase tracking-widest font-bold hover:bg-zinc-50 transition-all duration-300">
                  Tìm Hiểu Thêm
                </a>
              </div>
              <div className="mt-10 flex items-center gap-4 text-xs text-zinc-500">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="flex text-rose-300">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                  <p className="mt-1"><span className="font-bold text-zinc-800 tracking-wider">10,000+</span> khách hàng tin dùng</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[3/4] bg-[#FDE2E4] rounded-sm flex items-center justify-center overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" 
                  alt="OFÉLIA Cosmetics Collection" 
                  className="object-cover h-full w-full opacity-90"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-sm shadow-xl flex items-center gap-4 animate-bounce border border-rose-50" style={{ animationDuration: "3s" }}>
                <div className="w-12 h-12 bg-rose-50 flex items-center justify-center text-rose-400">
                  <Heart size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">Bestseller</p>
                  <p className="font-serif font-bold text-zinc-800 text-sm">Lolli Glow Tint</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Interest) */}
      <section className="py-24 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">Về Chúng Tôi</span>
              <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-6">Mỹ Phẩm Dành Cho Sự Tự Tin</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Ra đời từ niềm đam mê làm đẹp và khát khao mang đến những sản phẩm chất lượng quốc tế cho phụ nữ Việt, OFÉLIA là biểu tượng của <strong className="font-bold text-zinc-800">phái nữ thời thượng</strong>.
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-50 p-10 border border-zinc-100 group hover:border-rose-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-100/50">
              <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 text-rose-400 shadow-sm group-hover:scale-110 transition-transform">
                <Shield size={20} />
              </div>
              <h3 className="text-xs tracking-widest uppercase font-bold text-zinc-900 mb-3">Chất Lượng Quốc Tế</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">Sản xuất tại Hàn Quốc với những tiêu chuẩn kiểm định nghiêm ngặt nhất, an toàn cho mọi làn da.</p>
            </div>
            <div className="bg-zinc-50 p-10 border border-zinc-100 group hover:border-rose-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-100/50">
              <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 text-rose-400 shadow-sm group-hover:scale-110 transition-transform">
                <Star size={20} />
              </div>
              <h3 className="text-xs tracking-widest uppercase font-bold text-zinc-900 mb-3">Thiết Kế Tinh Tế</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">Vẻ ngoài sang trọng, nhỏ gọn và tiện lợi, OFÉLIA luôn là điểm nhấn hoàn hảo trong túi đồ của bạn.</p>
            </div>
            <div className="bg-zinc-50 p-10 border border-zinc-100 group hover:border-rose-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-100/50">
              <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 text-rose-400 shadow-sm group-hover:scale-110 transition-transform">
                <CheckCircle size={20} />
              </div>
              <h3 className="text-xs tracking-widest uppercase font-bold text-zinc-900 mb-3">Hiệu Quả Tối Ưu</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">Công thức thuần chay, dưỡng ẩm sâu, giữ màu lâu trôi - mang lại trải nghiệm hoàn hảo suốt cả ngày.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION (Desire) */}
      <section className="py-24 bg-white border-t border-zinc-100" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-rose-100 pb-6">
            <div>
              <span className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">Các Sản Phẩm</span>
              <h2 className="text-3xl font-serif text-zinc-900">Bộ Sưu Tập Nổi Bật</h2>
            </div>
            <Link to="/products" className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-rose-400 transition-colors border-b border-transparent hover:border-rose-400 pb-1">Xem tất cả</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
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
                    <p className="text-[10px] text-zinc-400 italic line-clamp-1 max-w-[200px]">
                      {product.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-rose-400 mt-0.5">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & PROCESS */}
      <section className="py-24 bg-white" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1596755389378-c5b9ced0c6d5?auto=format&fit=crop&q=80&w=800" alt="Makeup Texture" className="rounded-3xl shadow-xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Trải Nghiệm Sự Khác Biệt</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tại OFÉLIA, chúng tôi không chỉ bán mỹ phẩm, chúng tôi trao quyền để bạn thể hiện bức tranh cá tính của mình. 
                Những yếu tố tạo nên sự tin tưởng tuyệt đối:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">Thành Phần Lành Tính</h4>
                    <p className="text-sm text-gray-600">Được chiết xuất từ thiên nhiên (Dầu Jojoba, Dầu Hạnh Nhân, Argan), hoàn toàn thuần chay và không thử nghiệm trên động vật.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">Đa Dạng Sắc Độ</h4>
                    <p className="text-sm text-gray-600">Phù hợp hoàn hảo với làn da và tone màu của phụ nữ Á Đông, từ phong cách hàng ngày đến những sự kiện đặc biệt.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">Hiệu Năng Vượt Trội</h4>
                    <p className="text-sm text-gray-600">Độ bám màu lên đến 12 giờ, kết cấu cực kỳ mỏng nhẹ tạo hiệu ứng mờ ảo tự nhiên mà không gây bí da.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-24 bg-pink-900 text-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-16">Khách Hàng Nói Gì Về OFÉLIA</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pink-800/50 p-8 rounded-3xl backdrop-blur-sm border border-pink-700 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-900/50 hover:bg-pink-800/80">
              <div className="flex text-yellow-400 mb-4">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-pink-100 italic mb-6">"Lolli Liquid Blush màu Summery lên da cực kỳ tây và trong trẻo. Mình dùng từ sáng đến chiều vẫn không bị trôi hay xuống tone."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center font-bold">M</div>
                <div>
                  <p className="font-semibold text-sm">Minh Anh</p>
                  <p className="text-xs text-pink-300">Nhân viên văn phòng</p>
                </div>
              </div>
            </div>
            
            <div className="bg-pink-800/50 p-8 rounded-3xl backdrop-blur-sm border border-pink-700 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-900/50 hover:bg-pink-800/80">
              <div className="flex text-yellow-400 mb-4">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-pink-100 italic mb-6">"Chất son của MistyNow thực sự làm mình bất ngờ. Mỏng nhẹ như nước nhưng độ che phủ cực tốt, không hề khô môi."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center font-bold">H</div>
                <div>
                  <p className="font-semibold text-sm">Hương Mai</p>
                  <p className="text-xs text-pink-300">Beauty Blogger</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-800/50 p-8 rounded-3xl backdrop-blur-sm border border-pink-700 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-900/50 hover:bg-pink-800/80">
              <div className="flex text-yellow-400 mb-4">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-pink-100 italic mb-6">"Thiết kế packaging của OFÉLIA lúc nào cũng làm mình mê mẩn. Mua làm quà tặng bạn bè ai cũng khen sang trọng."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center font-bold">T</div>
                <div>
                  <p className="font-semibold text-sm">Trang Nhung</p>
                  <p className="text-xs text-pink-300">Sinh viên</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD FORM (Action) */}
      <section className="py-24 bg-gray-50" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-pink-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Nhận Tư Vấn Đặc Quyền</h2>
              <p className="text-gray-600 text-sm">Để lại thông tin để nhận tư vấn màu son, phấn má phù hợp nhất với làn da của bạn cùng các ưu đãi độc quyền.</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-sm" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                  <input type="tel" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-sm" placeholder="090 123 4567" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email (Tùy chọn)</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-sm" placeholder="email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bạn đang quan tâm đến sản phẩm nào?</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all text-sm text-gray-700">
                  <option value="">-- Chọn sản phẩm --</option>
                  <option value="blush">Má hồng (Lolli Liquid Blush)</option>
                  <option value="tint">Son Tint (MistyNow, Lolli Glow)</option>
                  <option value="accessories">Phụ kiện (Gương, Cọ, Mút)</option>
                  <option value="other">Cần tư vấn trọn bộ</option>
                </select>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full px-8 py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/30">
                  Gửi Yêu Cầu Tư Vấn
                </button>
              </div>
              <p className="text-center text-xs text-gray-400 mt-4">
                Bằng cách gửi thông tin, bạn đồng ý với <Link to="/policy/chinh-sach-bao-mat" className="underline hover:text-pink-600">Chính sách bảo mật</Link> của chúng tôi.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FEEDBACK FORM */}
      <FeedbackForm />
    </div>
  );
}
