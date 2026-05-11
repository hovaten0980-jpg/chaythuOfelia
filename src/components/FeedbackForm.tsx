import { useState } from "react";
import { Send, Star } from "lucide-react";
import { motion } from "motion/react";

export function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setRating(0);
      setFeedback("");
    }, 500);
  };

  return (
    <section className="py-20 bg-rose-50/50 border-t border-rose-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">Đánh giá</span>
          <h2 className="text-3xl font-serif text-zinc-900 mb-4">Trải Nghiệm Của Bạn</h2>
          <p className="text-sm text-zinc-500">
            Hãy chia sẻ cảm nhận của bạn để OFÉLIA có thể phục vụ bạn tốt hơn.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-rose-100">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={24} />
              </div>
              <h3 className="text-xl font-serif text-zinc-900 mb-2">Cảm ơn bạn!</h3>
              <p className="text-sm text-zinc-500 mb-6">Đánh giá của bạn đã được gửi thành công.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-rose-400 transition-colors border-b border-zinc-200 hover:border-rose-400 pb-1"
              >
                Gửi thêm đánh giá
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-4">Bạn cảm thấy trang web thế nào?</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className="transition-colors cursor-pointer text-2xl"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <Star 
                        className={`w-8 h-8 ${star <= (hover || rating) ? "fill-rose-400 text-rose-400" : "text-zinc-200"}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                  Góp ý thêm (Không bắt buộc)
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                  placeholder="Chia sẻ thêm ý kiến của bạn về sản phẩm và dịch vụ..."
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all text-zinc-800 resize-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={rating === 0}
                  className="px-8 py-3 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-rose-400 disabled:opacity-50 disabled:hover:bg-zinc-900 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  Gửi Đánh Giá
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
