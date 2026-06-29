import { motion } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { skills } from "../data";

export default function Skills() {
  return (
    <Section id="skills" className="max-w-6xl mx-auto px-6">
      <SectionTitle
        label=""
        title="What I Work With"
        sub="Technologies and tools I use to build production mobile applications"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{group.icon}</span>
              <h3 className="font-bold text-white">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs rounded-lg font-mono text-slate-300"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
