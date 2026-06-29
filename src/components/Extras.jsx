import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { achievements, services, testimonials } from "../data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Achievements() {
  return (
    <Section id="achievements" className="max-w-6xl mx-auto px-6">
      <SectionTitle label="" title="Key Milestones" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.03 }}
            className="glass rounded-2xl p-6 flex items-start gap-4"
          >
            <span className="text-3xl">{a.icon}</span>
            <div>
              <h3 className="font-bold text-white text-sm">{a.title}</h3>
              <p className="text-slate-400 text-xs mt-1">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" className="max-w-6xl mx-auto px-6">
      <SectionTitle
        label=""
        title="What I Offer"
        sub="Professional mobile development services for startups and businesses"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-5 group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-all group-hover:scale-110"
              style={{ background: "rgba(108,99,255,0.15)" }}
            >
              {s.icon}
            </div>
            <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
            <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <Section id="testimonials" className="max-w-4xl mx-auto px-6">
      <SectionTitle label="" title="What Clients Say" />

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-8 md:p-10 text-center"
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
              "{testimonials[idx].text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ background: "linear-gradient(135deg,#6C63FF,#00C2FF)", color: "#fff" }}
              >
                {testimonials[idx].avatar}
              </div>
              <div className="text-left">
                <p className="font-semibold text-white text-sm">{testimonials[idx].name}</p>
                <p className="text-slate-400 text-xs">{testimonials[idx].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <FiChevronLeft />
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="w-2 h-2 rounded-full transition-all mt-4"
              style={{ background: i === idx ? "#6C63FF" : "rgba(255,255,255,0.2)" }}
            />
          ))}
          <button
            onClick={next}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </Section>
  );
}
