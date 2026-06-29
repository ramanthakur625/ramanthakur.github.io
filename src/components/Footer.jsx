import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="gradient-text font-bold text-xl">RT.</p>
          <p className="text-slate-500 text-xs mt-1">React Native & iOS Developer</p>
        </div>

        <p className="text-slate-500 text-sm text-center">
          © {new Date().getFullYear()} Raman Thakur. Built with React + Vite + Tailwind.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: <FiGithub />, href: "https://github.com/ramanthakur625" },
            { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/raman-thakur-9b0a1a291" },
            { icon: <FiMail />, href: "mailto:raman49625@gmail.com" },
          ].map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              className="text-slate-400 hover:text-primary transition-colors"
            >
              {s.icon}
            </motion.a>
          ))}

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3 }}
            className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-primary transition-colors ml-2"
          >
            <FiArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
