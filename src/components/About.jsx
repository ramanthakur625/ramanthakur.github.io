import { motion } from "framer-motion";
import Section, { SectionTitle } from "./Section";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "3", label: "Live Production Apps" },
  { value: "20+", label: "REST APIs Integrated" },
  { value: "35%", label: "Crash Rate Reduced" },
];

export default function About() {
  return (
    <Section id="about" className="max-w-6xl mx-auto px-6">
      <SectionTitle
        label=""
        title="Who I Am"
        sub="Passionate mobile developer building apps people actually use"
      />

      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div className="space-y-5 text-slate-300 leading-relaxed">
          <p>
            I'm <span className="text-white font-semibold">Raman Thakur</span>, a Senior Mobile
            App Developer with <span className="gradient-text font-semibold">3+ years of
            hands-on production experience</span> building cross-platform mobile applications
            using React Native and native iOS Swift.
          </p>
          <p>
            I've shipped apps across dating, dance academy, and kids entertainment verticals —
            all live on the <span className="text-white">App Store and Google Play</span>. My
            work spans the complete mobile lifecycle: REST API integration, Firebase backend,
            real-time chat, push notifications (FCM, APNs, OneSignal), in-app purchases
            (StoreKit 2, Google Play Billing), CI/CD pipelines, and post-launch crash monitoring.
          </p>
          <p>
            On the native side, I work with Swift, Xcode, CoreMotion, Vision Framework,
            AVFoundation, and CoreData. I'm experienced with React Navigation, Redux Toolkit,
            Zustand, and BLE device integration.
          </p>
          <p>
            I hold a <span className="text-white">BCA from Himachal Pradesh University</span>{" "}
            and completed an iOS Swift internship at Zeroit Solutions before joining The
            Brihaspati Infotech, where I grew from intern-level to leading full production
            releases.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {["React Native", "Swift", "Firebase", "StoreKit 2", "BLE", "Fastlane"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full font-mono"
                style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "#a78bfa" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-black gradient-text mb-2">{s.value}</div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
