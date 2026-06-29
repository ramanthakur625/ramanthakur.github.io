import { useState } from "react";
import { motion } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { FiMail, FiSend, FiPhone, FiMapPin } from "react-icons/fi";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export default function Contact() {
  const [status, setStatus] = useState("idle"); 
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <Section id="contact" className="max-w-6xl mx-auto px-6">
      <SectionTitle
        label=""
        title="Let's Work Together"
        sub="Have a project in mind? I'd love to hear about it."
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-5">
              {[
                { icon: <FiMail />, label: "Email", value: "raman49625@gmail.com", href: "mailto:raman49625@gmail.com" },
                { icon: <FiPhone />, label: "Phone", value: "+91 88948 49625", href: "tel:+918894849625" },
                { icon: <FiMapPin />, label: "Location", value: "Himachal Pradesh, India", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-primary"
                    style={{ background: "rgba(108,99,255,0.15)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <p className="text-slate-400 text-sm leading-relaxed">
              I'm available for{" "}
              <span className="text-white font-medium">freelance projects</span> and{" "}
              <span className="text-white font-medium">full-time positions</span>. Whether you
              need a React Native app built from scratch, Firebase integration, IAP setup, or a
              performance audit — let's talk.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
            {[
              { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
              { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
            ].map((field) => (
              <div key={field.id}>
                <label className="block text-sm text-slate-400 mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.id}
                  value={form[field.id]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(108,99,255,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm text-slate-400 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none resize-none transition-all"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(108,99,255,0.6)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </span>
              ) : (
                <><FiSend /> Send Message</>
              )}
            </motion.button>

            {status === "success" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm text-green-400">
                ✅ Message sent! I'll reply to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm text-red-400">
                ❌ Something went wrong. Email me at raman49625@gmail.com
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
