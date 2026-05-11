import { useParams, Navigate, Link } from "react-router-dom";
import { policies } from "../data/mockData";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export function Policy() {
  const { id } = useParams();
  const policyId = id as keyof typeof policies;
  const policy = policies[policyId];

  if (!policy) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-32 pb-24 min-h-[80vh] bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-rose-400 mb-12 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Về trang chủ
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-serif text-zinc-900 mb-16 pb-8 border-b border-rose-50">
            {policy.title}
          </h1>

          <div className="space-y-12">
            {policy.content.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-rose-400 mb-4">
                  {section.heading}
                </h2>
                <div className="text-zinc-600 leading-relaxed text-xs md:text-sm space-y-4 whitespace-pre-line">
                  {section.text}
                </div>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
