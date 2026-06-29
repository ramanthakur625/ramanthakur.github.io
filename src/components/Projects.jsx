import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { projects } from "../data";
import { FiExternalLink } from "react-icons/fi";

const FILTERS = ["All", "Live", "In Development"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <Section id="projects" className="max-w-6xl mx-auto px-6">
      <SectionTitle
        label=""
        title="Production Apps"
        sub="Real apps live on App Store and Google Play"
      />

      {/* Filter tabs */}
      <div className="flex justify-center gap-3 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              filter === f
                ? "btn-primary"
                : "glass text-slate-400 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filtered.map((proj) => (
            <motion.div
              key={proj.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl overflow-hidden"
            >
              {/* Color bar */}
              <div className="h-1.5" style={{ background: proj.color }} />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: proj.status === "Live" ? "rgba(0,194,255,0.15)" : "rgba(255,159,67,0.15)",
                        color: proj.status === "Live" ? "#00C2FF" : "#FF9F43",
                      }}
                    >
                      {proj.status === "Live" ? "🟢 Live" : "🟡 In Development"}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2 py-0.5 rounded-md text-slate-300"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 rounded-lg font-mono"
                      style={{ background: "rgba(108,99,255,0.15)", color: "#a78bfa", border: "1px solid rgba(108,99,255,0.2)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Store links */}
                {(proj.appStore || proj.playStore) && (
                  <div className="flex gap-3 flex-wrap">
                    {proj.appStore && (
                      <a
                        href={proj.appStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl transition-all"
                        style={{ background: "rgba(255,255,255,0.06)", color: "#e2e8f0" }}
                        onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                        onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                      >
                        🍎 App Store <FiExternalLink size={11} />
                      </a>
                    )}
                    {proj.playStore && (
                      <a
                        href={proj.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl transition-all"
                        style={{ background: "rgba(255,255,255,0.06)", color: "#e2e8f0" }}
                        onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                        onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                      >
                        🤖 Play Store <FiExternalLink size={11} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
