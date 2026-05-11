import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const suggestedQuestions = [
  "Tư vấn phấn má Lolli Liquid Blush",
  "Tư vấn son Sugarplum Tint",
  "Tư vấn son Lolli Glow Tint",
  "Tư vấn Gương cầm tay",
  "Địa chỉ cửa hàng ở đâu?",
  "Cách liên hệ tư vấn trực tiếp?"
];

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Chào bạn, OFÉLIA có thể giúp gì cho bạn hôm nay?",
      sender: "bot"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { id: Date.now().toString(), text, sender: 'user' as const }];
    setMessages(newMessages);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      const lowerText = text.toLowerCase();

      if (lowerText.includes("lolli liquid blush")) {
        botResponse = "Lolli Liquid Blush là má hồng kem dạng lỏng siêu nhẹ, căng bóng và bám lâu tới 12h. Bạn thích tone màu cam, hồng hay nude để mình tư vấn màu phù hợp nhé?";
      } else if (lowerText.includes("sugarplum")) {
        botResponse = "Sugarplum Tint là dòng son tint lì lâu trôi, cực Trendy. Bạn quan tâm tới sắc đỏ hay hồng ạ?";
      } else if (lowerText.includes("lolli glow tint")) {
        botResponse = "Lolli Glow Tint là son bóng tint tạo độ căng mọng ánh nhũ siêu xinh, có độ bám màu rất tốt trên môi. Bạn muốn chọn màu nào?";
      } else if (lowerText.includes("gương")) {
        botResponse = "Gương cầm tay OFÉLIA thiết kế xinh xắn màu hồng ngọt ngào, chất liệu nhựa ABS cao cấp siêu bền. Giá hiện tại chỉ 99.000₫ ạ.";
      } else if (lowerText.includes("địa chỉ") || lowerText.includes("cửa hàng")) {
        botResponse = "Cửa hàng OFÉLIA hiện tại ở: Số 2 Võ Oanh, Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh. Rất hân hạnh được đón tiếp bạn!";
      } else if (lowerText.includes("liên hệ") || lowerText.includes("gọi") || lowerText.includes("cách liên lạc")) {
        botResponse = "Bạn có thể liên hệ trực tiếp qua số hotline: (+84) 12 345 6789 hoặc email: hovaten0980@gmail.com từ 9:00 - 18:00 hàng ngày.";
      } else {
        botResponse = "Cửa hàng đã tiếp nhận câu hỏi của bạn. Chuyên viên tư vấn của OFÉLIA sẽ liên hệ lại qua khung chat này trong thời gian sớm nhất nhé!";
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      <div 
        className={`fixed bottom-8 right-8 flex items-center space-x-3 bg-white shadow-2xl p-3 pr-5 rounded-full border border-rose-100 cursor-pointer z-50 hover:bg-rose-50 transition-colors ${isOpen ? 'hidden' : 'flex'}`} 
        onClick={() => setIsOpen(true)}
      >
        <div className="w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center">
          <MessageCircle size={16} className="text-white" />
        </div>
        <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest hidden sm:inline-block">Tư vấn trực tuyến</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 w-80 sm:w-96 bg-white rounded-sm shadow-2xl border border-rose-100 overflow-hidden z-50 flex flex-col h-[500px] max-h-[80vh]"
          >
            <div className="bg-white border-b border-rose-100 p-4 flex justify-between items-center">
              <div>
                <h3 className="font-serif font-medium text-zinc-800 text-sm uppercase tracking-wider">OFÉLIA Support</h3>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Chúng tôi trả lời ngay lập tức</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-rose-400 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-zinc-50 flex flex-col gap-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`max-w-[85%] p-3 text-xs leading-relaxed ${msg.sender === 'bot' ? "bg-white text-zinc-800 border border-zinc-100 self-start shadow-sm" : "bg-zinc-900 text-white self-end shadow-sm"} rounded-sm`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="bg-white p-3 border-t border-zinc-100 overflow-x-auto whitespace-nowrap py-3 space-x-2 flex">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="inline-block px-3 py-1.5 bg-zinc-50 hover:bg-rose-50 text-zinc-600 hover:text-rose-500 text-[10px] uppercase tracking-wider font-semibold rounded-sm transition-colors border border-zinc-200 hover:border-rose-200 whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="p-3 bg-white border-t border-zinc-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập tin nhắn..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-sm pl-4 pr-12 py-3 text-xs focus:outline-none focus:border-rose-300 transition-all text-zinc-800"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                />
                <button
                  onClick={() => handleSend(inputValue)}
                  disabled={!inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-rose-400 transition-colors disabled:opacity-50"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
