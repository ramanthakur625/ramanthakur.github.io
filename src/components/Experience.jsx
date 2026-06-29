import { motion } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { experiences } from "../data";
import { FiCheckCircle } from "react-icons/fi";

export default function Experience() {
  return (
    <Section id="experience" className="max-w-4xl mx-auto px-6">
      <SectionTitle
        label=""
        title="Where I've Worked"
        sub="My professional journey in mobile development"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16"
            >
              {/* Dot */}
              <div
                className="absolute left-4 top-6 w-4 h-4 rounded-full -translate-x-1/2 border-2 border-primary"
                style={{ background: "#0a0a0f" }}
              />

              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="gradient-text font-semibold text-sm">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm font-mono">{exp.period}</p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
                      style={{ background: "rgba(108,99,255,0.15)", color: "#a78bfa" }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4 mt-2">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-300">
                      <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
