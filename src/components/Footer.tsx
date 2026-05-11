import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 px-10 py-16 text-[10px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif uppercase tracking-[0.2em] font-semibold text-rose-300">
              OFÉLIA
            </Link>
            <p className="text-zinc-500 leading-relaxed max-w-xs text-xs">
              Thương hiệu mỹ phẩm cao cấp. OFÉLIA là biểu tượng của phái nữ thời thượng. Mang đến vẻ đẹp tự nhiên, thanh lịch và đẳng cấp quốc tế.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-rose-400 hover:text-white transition-colors">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-rose-400 hover:text-white transition-colors">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif uppercase tracking-widest text-xs font-semibold mb-6">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-400 text-xs">
                <MapPin size={14} className="mr-3 text-rose-400 shrink-0 mt-0.5" />
                <span>Số 2 Võ Oanh, Phường Thạnh Mỹ Tây,<br/>TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center text-zinc-400 text-xs">
                <Phone size={14} className="mr-3 text-rose-400 shrink-0" />
                <span>(+84) 12 345 6789</span>
              </li>
              <li className="flex items-center text-zinc-400 text-xs">
                <Mail size={14} className="mr-3 text-rose-400 shrink-0" />
                <span>hovaten0980@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif uppercase tracking-widest text-xs font-semibold mb-6">Khám Phá</h4>
            <ul className="space-y-3 uppercase tracking-tighter">
              <li><a href="/#about" className="text-zinc-400 hover:text-rose-300 transition-colors">Về Chúng Tôi</a></li>
              <li><a href="/#products" className="text-zinc-400 hover:text-rose-300 transition-colors">Sản Phẩm</a></li>
              <li><a href="/#why-us" className="text-zinc-400 hover:text-rose-300 transition-colors">Tại Sao Chọn OFÉLIA</a></li>
              <li><a href="/#testimonials" className="text-zinc-400 hover:text-rose-300 transition-colors">Đánh Giá</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif uppercase tracking-widest text-xs font-semibold mb-6">Chính Sách</h4>
            <ul className="space-y-3 uppercase tracking-tighter">
              <li><Link to="/policy/dieu-khoan-dich-vu" className="text-zinc-400 hover:text-rose-300 transition-colors">Điều khoản dịch vụ</Link></li>
              <li><Link to="/policy/chinh-sach-bao-mat" className="text-zinc-400 hover:text-rose-300 transition-colors">Chính sách bảo mật</Link></li>
              <li><Link to="/policy/chinh-sach-doi-tra" className="text-zinc-400 hover:text-rose-300 transition-colors">Chính sách đổi trả</Link></li>
              <li><Link to="/policy/chinh-sach-hoan-tien" className="text-zinc-400 hover:text-rose-300 transition-colors">Chính sách hoàn tiền</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest">
          <p className="text-zinc-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} OFÉLIA Vietnam.
          </p>
          <div className="flex space-x-6 text-zinc-500">
            <Link to="/policy/chinh-sach-bao-mat" className="hover:text-rose-300 transition-colors">Privacy</Link>
            <Link to="/policy/dieu-khoan-dich-vu" className="hover:text-rose-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
