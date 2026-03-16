import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Target,
  Search,
  Layers,
  Code,
  Shield,
  Settings,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Approach() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section
        aria-labelledby="approach-hero-heading"
        className="py-24 lg:py-32"
        style={{ background: 'linear-gradient(160deg, #F5F7F9 0%, #ffffff 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-[#F0FAF9] border border-[#55B7AE]/20 text-[#55B7AE] text-sm font-semibold rounded-full mb-6">
              Our Methodology
            </span>
            <h1 id="approach-hero-heading" className="text-[#2E3A44] mb-5">
              Our Approach
            </h1>
            <p className="text-[#7A8792] text-xl">
              Strategic technology architecture designed for long-term business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Approach Matters */}
      <section aria-labelledby="why-approach-heading" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="why-approach-heading" className="text-[#2E3A44] mb-6">Why Approach Matters</h2>
              <div className="space-y-5 text-[#7A8792]">
                <p>
                  Technology decisions can determine whether an organization grows efficiently or struggles with operational complexity.
                </p>
                <p>
                  Poorly designed technology environments lead to security risks, operational disruptions, and unnecessary costs.
                </p>
                <p className="text-[#2E3A44] font-medium">
                  Tech Solve Engine focuses on building technology environments that remain reliable, secure, and scalable over time.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80"
                alt="Team of technology engineers collaborating in a modern workspace"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TSE Methodology */}
      <section aria-labelledby="methodology-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 id="methodology-heading" className="text-[#2E3A44] mb-4">TSE Methodology</h2>
            <p className="text-[#7A8792] text-lg max-w-2xl mx-auto">
              Our methodology combines strategic thinking with disciplined engineering to deliver lasting results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white p-7 rounded-xl border border-[#D9DEE3] shadow-sm hover:border-[#55B7AE]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg text-white flex items-center justify-center font-bold text-sm shrink-0"
                    style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </div>
                  <div
                    className="w-9 h-9 bg-[#F0FAF9] rounded-lg flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <step.icon className="text-[#55B7AE]" size={18} />
                  </div>
                </div>
                <h3 className="text-[#2E3A44] mb-3">{step.title}</h3>
                <p className="text-[#7A8792] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Philosophy */}
      <section aria-labelledby="arch-philosophy-heading" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 id="arch-philosophy-heading" className="text-[#2E3A44] mb-4">Architecture Philosophy</h2>
              <p className="text-[#7A8792] text-xl mb-8">
                Technology architecture must support business growth without creating operational instability.
              </p>
              <p className="text-[#7A8792] mb-8">
                At Tech Solve Engine, our architecture is designed to:
              </p>

              <ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                aria-label="Architecture principles"
              >
                {philosophyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#55B7AE] shrink-0 mt-0.5" size={20} aria-hidden="true" />
                    <span className="text-[#5A6570]">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Long-Term Partnership Banner */}
      <section
        aria-labelledby="partnership-heading"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 id="partnership-heading" className="text-white mb-5">Long-Term Partnership Model</h2>
            <p className="text-[#A0A8AF] text-xl mb-4">
              We don't just build and walk away. Tech Solve Engine operates as a long-term technology partner, supporting your environment through continuous evolution and growth.
            </p>
            <p className="text-[#7FCAC4] font-semibold text-lg">Our architecture is designed to support 5–7 years of business growth without requiring disruptive overhauls.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="approach-cta-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="approach-cta-heading" className="text-[#2E3A44] mb-4">
              Ready to Build the Right Foundation?
            </h2>
            <p className="text-[#7A8792] text-xl mb-10">
              Let's discuss how our approach can support your technology goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all shadow hover:shadow-md hover:-translate-y-0.5 text-lg"
            >
              Talk to Our Experts
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const methodology = [
  {
    icon: Target,
    title: 'Understand Business Vision',
    description: 'We begin by understanding your business objectives, growth plans, and operational requirements.',
  },
  {
    icon: Search,
    title: 'Evaluate Current Environment',
    description: 'Assessing existing infrastructure, identifying gaps, and understanding constraints.',
  },
  {
    icon: Layers,
    title: 'Define Technology Strategy',
    description: 'Creating a technology roadmap aligned with business goals and scalability needs.',
  },
  {
    icon: Code,
    title: 'Design Architecture',
    description: 'Designing infrastructure, cloud, and security architecture for long-term scale.',
  },
  {
    icon: Shield,
    title: 'Implement Secure Infrastructure',
    description: 'Deploying solutions with engineering discipline and security-first principles.',
  },
  {
    icon: Settings,
    title: 'Support and Evolve Operations',
    description: 'Continuous monitoring, optimization, and evolution to maintain performance.',
  },
];

const philosophyPoints = [
  'Support business growth without disruption',
  'Minimize operational risk at all stages',
  'Remain secure and compliant over time',
  'Allow future expansion and scale',
  'Reduce unnecessary complexity',
];
