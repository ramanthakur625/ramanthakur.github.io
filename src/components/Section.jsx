import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Section({ id, className = "", children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionTitle({ label, title, sub }) {
  return (
    <div className="text-center mb-16">
      <span className="text-primary font-mono text-sm tracking-widest uppercase">{label}</span>
      <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4">{title}</h2>
      {sub && <p className="text-slate-400 max-w-xl mx-auto">{sub}</p>}
    </div>
  );
}
