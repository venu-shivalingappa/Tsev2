import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Target,
  Network,
  Cloud,
  Shield,
  Cpu,
  Settings,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  Sparkles,
  Zap,
  Activity,
  Lock,
  Server,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import tseLogo from 'figma:asset/e931ab4c03f17ef1b0518c12ce1dd505e2334af3.png';

export default function Home() {
  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2E3A44 0%, #3F4A54 45%, #2E3A44 100%)' }}
      >
        {/* Grid dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #55B7AE 1.5px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ambient teal glow */}
        <motion.div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(85,183,174,0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(79,209,197,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#55B7AE]/30 bg-[#55B7AE]/10 text-[#7FCAC4] text-sm font-medium mb-8"
              >
                <Sparkles size={15} aria-hidden="true" />
                <span>20+ Years of Engineering Excellence</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-white mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span className="block">Strategic</span>
                <span
                  className="block"
                  style={{ WebkitTextFillColor: 'transparent', background: 'linear-gradient(90deg, #55B7AE, #4FD1C5)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
                >
                  Technology
                </span>
                <span className="block">Partner</span>
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="text-lg text-[#A0A8AF] mb-10 max-w-lg"
                style={{ lineHeight: 1.75 }}
              >
                We design, build, secure, and operate the technology backbone that enables businesses to scale confidently — from startup to enterprise.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#55B7AE]"
                >
                  Talk to Our Experts
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                >
                  View Case Studies
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10"
                aria-label="Key statistics"
              >
                {[
                  { value: '20+', label: 'Years Experience' },
                  { value: '99.9%', label: 'Uptime SLA' },
                  { value: '86%', label: 'Cost Savings' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#7A8792] mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* ── Circuit trace: top-left corner ── */}
              <svg
                className="absolute top-0 left-0 w-36 h-36 pointer-events-none z-0"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M 8 85 L 8 28 L 58 28"
                  stroke="#55B7AE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 1.2, ease: 'easeOut' }}
                />
                <motion.path
                  d="M 8 95 L 8 42 L 32 42 L 32 14 L 82 14"
                  stroke="#55B7AE"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2.5, delay: 1.6, ease: 'easeOut' }}
                />
                <motion.circle
                  cx="58" cy="28" r="3.5"
                  fill="#55B7AE"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.8, duration: 0.4 }}
                />
                <motion.circle
                  cx="82" cy="14" r="2.5"
                  fill="#55B7AE" fillOpacity={0.5}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.2, duration: 0.4 }}
                />
                {/* Pulse ring at joint */}
                <motion.circle
                  cx="58" cy="28" r="3.5"
                  fill="none" stroke="#55B7AE"
                  animate={{ r: [3.5, 14, 3.5], opacity: [0.9, 0, 0.9] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 3.2, ease: 'easeOut' }}
                />
                {/* Travelling data dot */}
                <motion.circle
                  r="2.5" fill="#4FD1C5"
                  animate={{ cx: [8, 8, 58], cy: [85, 28, 28] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                />
              </svg>

              {/* ── Circuit trace: bottom-right corner ── */}
              <svg
                className="absolute bottom-0 right-0 w-36 h-36 pointer-events-none z-0"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M 92 15 L 92 72 L 42 72"
                  stroke="#55B7AE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 1.8, ease: 'easeOut' }}
                />
                <motion.path
                  d="M 92 5 L 92 58 L 68 58 L 68 86 L 18 86"
                  stroke="#55B7AE"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2.5, delay: 2.2, ease: 'easeOut' }}
                />
                <motion.circle
                  cx="42" cy="72" r="3.5"
                  fill="#55B7AE"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.4, duration: 0.4 }}
                />
                <motion.circle
                  cx="18" cy="86" r="2.5"
                  fill="#55B7AE" fillOpacity={0.5}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.8, duration: 0.4 }}
                />
                <motion.circle
                  cx="42" cy="72" r="3.5"
                  fill="none" stroke="#55B7AE"
                  animate={{ r: [3.5, 14, 3.5], opacity: [0.9, 0, 0.9] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 3.8, ease: 'easeOut' }}
                />
                <motion.circle
                  r="2.5" fill="#4FD1C5"
                  animate={{ cx: [92, 92, 42], cy: [15, 72, 72] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
                />
              </svg>

              {/* ── Ambient glow behind image ── */}
              <motion.div
                className="absolute inset-8 rounded-3xl blur-3xl pointer-events-none z-0"
                style={{ background: 'radial-gradient(ellipse, rgba(85,183,174,0.22) 0%, transparent 70%)' }}
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />

              {/* ── Floating portrait image + chips ── */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 max-w-[380px] mx-auto"
              >
                {/* Portrait image */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  style={{ aspectRatio: '3/4' }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1700330349498-18fc1dfac02a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyJTIwYmx1ZSUyMGxpZ2h0cyUyMHZlcnRpY2FsfGVufDF8fHx8MTc3MzI0NDEwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Vertical data center server rack with blue lighting"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{ background: 'linear-gradient(to top, rgba(46,58,68,0.55) 0%, transparent 55%), linear-gradient(135deg, rgba(85,183,174,0.1) 0%, transparent 50%)' }}
                  />
                </div>

                {/* ── Floating chip — Scalable Network (left) ── */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-[28%] -left-[4.5rem] z-20 bg-[#2A3540]/95 backdrop-blur-md border border-[#55B7AE]/30 rounded-xl p-3 flex items-center gap-2.5 shadow-xl"
                  aria-hidden="true"
                >
                  <motion.div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(85,183,174,0.2)' }}
                    animate={{ boxShadow: ['0 0 0 0 rgba(85,183,174,0.5)', '0 0 0 6px rgba(85,183,174,0)', '0 0 0 0 rgba(85,183,174,0.5)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Network className="text-[#55B7AE]" size={15} />
                  </motion.div>
                  <div>
                    <div className="text-white text-xs font-semibold leading-tight">Scalable Network</div>
                    <div className="text-[#7FCAC4] text-[10px] mt-0.5">Enterprise-grade</div>
                  </div>
                </motion.div>

                {/* ── Floating chip — Uptime Monitor (right) ── */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="absolute top-[52%] -right-[4.5rem] z-20 bg-[#2A3540]/95 backdrop-blur-md border border-[#55B7AE]/30 rounded-xl p-3 flex items-center gap-2.5 shadow-xl"
                  aria-hidden="true"
                >
                  <motion.div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(85,183,174,0.2)' }}
                    animate={{ boxShadow: ['0 0 0 0 rgba(85,183,174,0.5)', '0 0 0 6px rgba(85,183,174,0)', '0 0 0 0 rgba(85,183,174,0.5)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  >
                    <Activity className="text-[#55B7AE]" size={15} />
                  </motion.div>
                  <div>
                    <div className="text-white text-xs font-semibold leading-tight">99.9% Uptime</div>
                    <div className="text-[#7FCAC4] text-[10px] mt-0.5">Monitored 24/7</div>
                  </div>
                </motion.div>

                {/* ── Floating chip — Secure Access (left-lower) ── */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                  className="absolute top-[68%] -left-[4rem] z-20 bg-[#2A3540]/95 backdrop-blur-md border border-[#55B7AE]/30 rounded-xl p-3 flex items-center gap-2.5 shadow-xl"
                  aria-hidden="true"
                >
                  <motion.div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(85,183,174,0.2)' }}
                    animate={{ boxShadow: ['0 0 0 0 rgba(85,183,174,0.5)', '0 0 0 6px rgba(85,183,174,0)', '0 0 0 0 rgba(85,183,174,0.5)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                  >
                    <Lock className="text-[#55B7AE]" size={15} />
                  </motion.div>
                  <div>
                    <div className="text-white text-xs font-semibold leading-tight">Zero-Trust</div>
                    <div className="text-[#7FCAC4] text-[10px] mt-0.5">Security built-in</div>
                  </div>
                </motion.div>

                {/* ── Floating badge — Secure & Compliant ── */}
                <motion.div
                  animate={{ y: [0, 14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 z-20 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3 border border-[#D9DEE3]"
                  aria-hidden="true"
                >
                  <div className="w-11 h-11 bg-[#F0FAF9] rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#55B7AE]" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2E3A44] text-sm">Secure & Compliant</div>
                    <div className="text-xs text-[#7A8792]">ISO 27001 Ready</div>
                  </div>
                </motion.div>

                {/* ── Floating badge — Fast Deployment ── */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -top-6 -right-6 z-20 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3 border border-[#D9DEE3]"
                  aria-hidden="true"
                >
                  <div className="w-11 h-11 bg-[#F0FAF9] rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="text-[#55B7AE]" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2E3A44] text-sm">Fast Deployment</div>
                    <div className="text-xs text-[#7A8792]">5-7 Year Architecture</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/25 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-[#55B7AE] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          TRUST SIGNALS
      ══════════════════════════════════════ */}
      <section
        aria-labelledby="trust-heading"
        className="py-20 bg-[#F5F7F9]"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 id="trust-heading" className="text-[#2E3A44] mb-4">
              Trusted by Growing Businesses and Global Organizations
            </h2>
            <p className="text-[#7A8792] max-w-2xl mx-auto text-lg">
              Over two decades of engineering discipline, building reliable technology environments for modern organizations across India and globally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: '20+ Years Engineering Experience', icon: Target },
              { label: 'Long-Term Client Partnerships', icon: CheckCircle2 },
              { label: 'Architecture Built for Scale', icon: Network },
              { label: 'Zero Compliance Incidents', icon: Globe },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[#D9DEE3] shadow-sm hover:shadow-md hover:border-[#55B7AE]/40 transition-all"
              >
                <div className="w-10 h-10 bg-[#F0FAF9] rounded-lg flex items-center justify-center shrink-0" aria-hidden="true">
                  <item.icon className="text-[#55B7AE]" size={20} />
                </div>
                <span className="text-[#2E3A44] font-medium text-sm leading-snug">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <section aria-labelledby="services-heading" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 id="services-heading" className="text-[#2E3A44] mb-4">What We Do</h2>
            <p className="text-[#7A8792] max-w-2xl mx-auto text-lg">
              Technology is the backbone of every modern business. We help organizations design, build, secure, and operate the technology environments required to support growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white p-7 rounded-xl border border-[#D9DEE3] shadow-sm hover:shadow-lg hover:border-[#55B7AE]/30 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
                  aria-hidden="true"
                >
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-[#2E3A44] mb-3">{service.title}</h3>
                <p className="text-[#7A8792] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-[#55B7AE] hover:text-[#3EA39A] font-semibold transition-colors group"
            >
              View All Solutions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          APPROACH — IMAGE + TEXT
      ══════════════════════════════════════ */}
      <section aria-labelledby="approach-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 min-h-[480px]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80"
                  alt="Data center server racks with blue lighting representing technology infrastructure"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{ background: 'linear-gradient(to top, rgba(46,58,68,0.45) 0%, transparent 55%)' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 id="approach-heading" className="text-[#2E3A44] mb-5">Our Approach</h2>
              <p className="text-[#7A8792] text-lg mb-8">
                Technology decisions impact every part of a business. We follow a disciplined approach ensuring technology environments are designed to support long-term business growth.
              </p>

              <ol className="space-y-4" aria-label="Approach steps">
                {approachSteps.map((step, index) => (
                  <motion.li
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors group"
                  >
                    <div
                      className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-[#2E3A44] mb-1">{step.title}</h3>
                      <p className="text-[#7A8792] text-sm">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-8 p-5 bg-white rounded-xl border-l-4 border-[#55B7AE] shadow-sm">
                <p className="text-[#2E3A44] font-medium">
                  Our architecture is designed to support 3–5 years of business growth without disrupting operations.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to="/approach"
                  className="inline-flex items-center gap-2 text-[#55B7AE] hover:text-[#3EA39A] font-semibold transition-colors group"
                >
                  Explore Our Methodology
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CASE STUDIES PREVIEW
      ══════════════════════════════════════ */}
      <section aria-labelledby="case-studies-heading" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 id="case-studies-heading" className="text-[#2E3A44] mb-4">Real Results from Real Organizations</h2>
            <p className="text-[#7A8792] max-w-2xl mx-auto text-lg">
              Engineering outcomes that drive measurable business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudiesPreview.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#F5F7F9] p-8 rounded-xl border border-[#D9DEE3] hover:border-[#55B7AE]/40 hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F0FAF9] border border-[#55B7AE]/20 text-[#55B7AE] text-xs font-semibold mb-4">
                  {study.tag}
                </div>
                <h3 className="text-[#2E3A44] mb-3">{study.title}</h3>
                <p className="text-[#7A8792] mb-5 text-sm leading-relaxed">{study.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#55B7AE] font-bold text-xl">{study.impact}</span>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1 text-[#55B7AE] hover:text-[#3EA39A] text-sm font-semibold transition-colors group"
                    aria-label={`Read case study: ${study.title}`}
                  >
                    Read Case Study
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              View All Case Studies
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECURITY & COMPLIANCE
      ══════════════════════════════════════ */}
      <section aria-labelledby="security-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="security-heading" className="text-[#2E3A44] mb-5">Security & Compliance Expertise</h2>
              <p className="text-[#7A8792] text-lg mb-8">
                Security must be built into the architecture of every technology environment. We design secure technology infrastructures aligned with global security frameworks and governance models.
              </p>

              <ul className="space-y-4 mb-8" aria-label="Security capabilities">
                {[
                  'Security architecture built-in from day one',
                  'Risk management frameworks',
                  'ISO 27001 readiness support',
                  'Security governance implementation',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#55B7AE] shrink-0" size={20} aria-hidden="true" />
                    <span className="text-[#5A6570]">{item}</span>
                  </li>
                ))}
              </ul>

              <aside className="p-5 bg-white rounded-xl border border-[#D9DEE3] shadow-sm">
                <p className="text-[#5A6570] text-sm leading-relaxed">
                  <strong className="text-[#2E3A44]">Accreditation Notice:</strong> Tech Solve Engine has applied for accreditation with the National Accreditation Board for Certification Bodies (NABCB) to operate as an ISO/IEC 27001 certification body in India. Services subject to approval.
                </p>
              </aside>

              <div className="mt-6">
                <Link
                  to="/iso-27001"
                  className="inline-flex items-center gap-2 text-[#55B7AE] hover:text-[#3EA39A] font-semibold transition-colors group"
                >
                  Learn About ISO 27001
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80"
                alt="Cybersecurity professional monitoring security dashboard"
                className="rounded-2xl shadow-xl w-full"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                aria-hidden="true"
                style={{ background: 'linear-gradient(to top, rgba(46,58,68,0.6) 0%, transparent 55%)' }}
              />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <Shield className="mb-3 text-[#55B7AE]" size={40} aria-hidden="true" />
                <h3 className="text-white mb-1">Built on Global Security Standards</h3>
                <p className="text-[#A0A8AF] text-sm">Ensuring your technology meets the highest standards of protection</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GLOBAL EXPANSION
      ══════════════════════════════════════ */}
      <section
        aria-labelledby="global-heading"
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2E3A44 0%, #3F4A54 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #55B7AE 1.5px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Globe className="mb-6 text-[#55B7AE]" size={56} aria-hidden="true" />
              <h2 id="global-heading" className="text-white mb-5">
                Helping Global Companies Build Technology Operations in India
              </h2>
              <p className="text-[#A0A8AF] text-lg mb-6">
                International organizations expanding into India require reliable technology infrastructure, secure environments, and operational readiness.
              </p>

              <ul className="space-y-3 mb-8" aria-label="Global expansion services">
                {[
                  'Infrastructure setup from day one',
                  'Cloud environments aligned with global standards',
                  'Security and compliance support',
                  'Operational technology management',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#55B7AE] shrink-0" size={18} aria-hidden="true" />
                    <span className="text-[#D9DEE3]">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/global-expansion"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all shadow hover:shadow-md hover:-translate-y-0.5"
              >
                Learn More
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
                alt="Modern city skyline representing global business operations"
                className="rounded-2xl shadow-xl border border-white/10 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY TSE
      ══════════════════════════════════════ */}
      <section aria-labelledby="why-tse-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 id="why-tse-heading" className="text-[#2E3A44] mb-4">Why Tech Solve Engine</h2>
            <p className="text-[#7A8792] max-w-2xl mx-auto text-lg">
              Organizations choose TSE because we approach technology as a strategic business function, not a commodity service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyTSE.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white p-7 rounded-xl border border-[#D9DEE3] shadow-sm hover:shadow-md hover:border-[#55B7AE]/30 transition-all text-center"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
                  aria-hidden="true"
                >
                  <item.icon className="text-white" size={26} />
                </div>
                <h3 className="text-[#2E3A44] mb-3">{item.title}</h3>
                <p className="text-[#7A8792] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section
        aria-labelledby="cta-heading"
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2E3A44 0%, #3F4A54 60%, #2E3A44 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #55B7AE 1.5px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 id="cta-heading" className="text-white mb-5">
            Build Your Technology Backbone with Confidence
          </h2>
          <p className="text-[#A0A8AF] text-lg mb-10">
            Work with Tech Solve Engine to design and operate technology environments that support long-term business growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
          >
            Talk to Our Experts
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

/* ── Data ─────────────────────────────────── */

const services = [
  {
    icon: Target,
    title: 'Technology Strategy',
    description: 'Aligning technology roadmaps with business vision, scalability needs, and operational requirements.',
  },
  {
    icon: Network,
    title: 'Infrastructure & Networking',
    description: 'Stable, scalable infrastructure environments designed for reliable business operations.',
  },
  {
    icon: Cloud,
    title: 'Cloud Engineering',
    description: 'Building cloud environments tailored for performance, flexibility, and cost optimization.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protecting organizations with security-first architecture and global governance frameworks.',
  },
  {
    icon: Cpu,
    title: 'DevOps & Automation',
    description: 'Improving operations through CI/CD, infrastructure-as-code, and modern automation practices.',
  },
  {
    icon: Settings,
    title: 'Managed Operations',
    description: 'End-to-end technology operation so your team can focus on business growth.',
  },
  {
    icon: FileCheck,
    title: 'Security & Compliance',
    description: 'ISO 27001 readiness, governance frameworks, and compliance advisory for organizations.',
  },
];

const approachSteps = [
  {
    title: 'Understand Business Vision',
    description: 'We begin by deeply understanding your objectives, growth plans, and operational requirements.',
  },
  {
    title: 'Evaluate Current Environment',
    description: 'Assessing existing infrastructure, identifying gaps, and understanding constraints.',
  },
  {
    title: 'Design Technology Strategy',
    description: 'Creating a roadmap aligned with business goals and multi-year scalability needs.',
  },
  {
    title: 'Implement & Operate',
    description: 'Deploying with engineering discipline, then continuously optimizing for performance.',
  },
];

const caseStudiesPreview = [
  {
    tag: 'Startup Scaling',
    title: 'Scaling Technology for a Rapidly Growing Startup',
    description: 'Oben Electric scaled from startup to 400+ employees with zero technology-related business disruptions.',
    impact: '400+ employees, zero disruption',
  },
  {
    tag: 'Cost Optimization',
    title: 'Infrastructure Architecture Optimization',
    description: 'Redesigned an oversized ₹18L infrastructure proposal, delivering all capabilities at ₹2.5L.',
    impact: '86% cost reduction achieved',
  },
];

const whyTSE = [
  {
    icon: Target,
    title: 'Engineering-Driven',
    description: 'Deep engineering expertise — not generic IT reselling. Every solution is built on sound principles.',
  },
  {
    icon: Shield,
    title: 'Security-First',
    description: 'Security is designed into architecture from day one, not bolted on as an afterthought.',
  },
  {
    icon: Network,
    title: 'Long-Term Thinking',
    description: 'Our architecture supports 3–5 years of growth without requiring disruptive rebuilds.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'International best practices combined with deep local expertise in the Indian market.',
  },
];