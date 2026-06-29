import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

const TYPING_WORDS = [
  "React Native Developer",
  "iOS Swift Developer",
  "Firebase Expert",
  "App Store Publisher",
  "Mobile Architect",
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[index];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % TYPING_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="gradient-text font-bold">
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

/* Floating particles */
function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "linear-gradient(135deg,#6C63FF,#00C2FF)",
          }}
          animate={{ y: [-20, 20, -20], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #6C63FF, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #00C2FF, transparent)" }}
        />
      </div>

      <Particles />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 pt-24 pb-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-primary font-mono text-sm mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            👋 Hello, I'm
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
            Raman
            <br />
            <span className="gradient-text">Thakur</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-2 h-8">
            <TypingText />
          </p>

          <p className="text-slate-400 max-w-xl mt-4 mb-8 leading-relaxed">
            Building high-performance cross-platform mobile applications with React
            Native and Native iOS. 3+ years shipping production apps to the App
            Store and Google Play.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a
              href="https://docs.google.com/document/d/16SOWMrYMbiFURyY6wQz0yZQTug7Fw7EO/edit?usp=sharing&ouid=101107939379367010212&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn-outline flex items-center gap-2">
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-5 justify-center lg:justify-start">
            {[
              { icon: <FiGithub />, href: "https://github.com/ramanthakur625", label: "GitHub" },
              { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/raman-thakur-9b0a1a291", label: "LinkedIn" },
              { icon: <FiMail />, href: "mailto:raman49625@gmail.com", label: "Email" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Avatar / Profile card */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-40 scale-110"
              style={{ background: "linear-gradient(135deg,#6C63FF,#00C2FF)" }}
            />
            {/* Avatar circle */}
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center text-8xl font-black"
              style={{
                background: "linear-gradient(135deg, #6C63FF22, #00C2FF22)",
                border: "2px solid rgba(108,99,255,0.3)",
              }}
            >
              RT
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 glass rounded-xl px-3 py-1 text-xs font-semibold text-primary"
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              React Native ⚡
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-1 text-xs font-semibold text-secondary"
              animate={{ rotate: [3, -3, 3] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              iOS Swift 🍎
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border border-slate-600 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
