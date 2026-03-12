import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Shield, FileCheck, AlertCircle, CheckCircle2, ArrowRight, Lock, Globe, Award } from 'lucide-react';

export default function ISO27001() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section
        aria-labelledby="iso-hero-heading"
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #F5F7F9 0%, #ffffff 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
              aria-hidden="true"
            >
              <Shield className="text-white" size={40} />
            </div>
            <span className="inline-block px-4 py-1.5 bg-[#F0FAF9] border border-[#55B7AE]/20 text-[#55B7AE] text-sm font-semibold rounded-full mb-6">
              Information Security
            </span>
            <h1 id="iso-hero-heading" className="text-[#2E3A44] mb-5">
              ISO/IEC 27001 Security Framework
            </h1>
            <p className="text-[#7A8792] text-xl">
              Building secure organizations through strong information security governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is ISO 27001 */}
      <section aria-labelledby="what-is-iso-heading" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 id="what-is-iso-heading" className="text-[#2E3A44] mb-6">What is ISO/IEC 27001?</h2>
              <div className="space-y-5 text-[#7A8792]">
                <p>
                  ISO/IEC 27001 is an internationally recognized standard for managing information security risks through structured governance frameworks.
                </p>
                <p>
                  The standard provides a systematic approach to managing sensitive company information, ensuring it remains secure through people, processes, and technology controls.
                </p>
                <p>
                  Organizations implementing ISO 27001 demonstrate their commitment to information security best practices and regulatory compliance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Organizations Need It */}
      <section aria-labelledby="why-iso-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 id="why-iso-heading" className="text-[#2E3A44] mb-4">Why Organizations Need ISO 27001</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-7 rounded-xl border border-[#D9DEE3] shadow-sm hover:border-[#55B7AE]/30 hover:shadow-md transition-all"
              >
                <div
                  className="w-12 h-12 bg-[#F0FAF9] rounded-xl flex items-center justify-center mb-5"
                  aria-hidden="true"
                >
                  <benefit.icon className="text-[#55B7AE]" size={24} />
                </div>
                <h3 className="text-[#2E3A44] mb-3">{benefit.title}</h3>
                <p className="text-[#7A8792] text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TSE Security Capabilities */}
      <section aria-labelledby="tse-capabilities-heading" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 id="tse-capabilities-heading" className="text-[#2E3A44] mb-4">TSE Security Capabilities</h2>
              <p className="text-[#7A8792] text-lg mb-10">
                Tech Solve Engine supports organizations implementing security governance aligned with ISO 27001 principles.
              </p>

              <ul
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                aria-label="TSE security capabilities"
              >
                {capabilities.map((capability) => (
                  <li
                    key={capability.title}
                    className="flex items-start gap-4 p-5 bg-[#F5F7F9] rounded-xl border border-[#D9DEE3] hover:border-[#55B7AE]/30 transition-all"
                  >
                    <CheckCircle2 className="text-[#55B7AE] shrink-0 mt-0.5" size={20} aria-hidden="true" />
                    <div>
                      <h3 className="text-[#2E3A44] mb-1">{capability.title}</h3>
                      <p className="text-[#7A8792] text-sm">{capability.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certification Pathway */}
      <section
        aria-labelledby="certification-heading"
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
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 id="certification-heading" className="text-white mb-6">Certification Pathway</h2>

              {/* Notice */}
              <aside
                className="bg-[#3F4A54] border border-[#55B7AE]/20 p-6 rounded-xl mb-8"
                aria-label="Accreditation notice"
              >
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-[#55B7AE] shrink-0 mt-0.5" size={24} aria-hidden="true" />
                  <div>
                    <p className="text-[#D9DEE3] mb-3">
                      Tech Solve Engine has applied for accreditation with the National Accreditation Board for Certification Bodies (NABCB) to operate as an ISO/IEC 27001 certification body in India.
                    </p>
                    <p className="font-semibold text-white">
                      Certification services will be offered subject to accreditation approval.
                    </p>
                  </div>
                </div>
              </aside>

              <h3 className="text-white text-2xl font-semibold mb-4">Our Advisory Services</h3>
              <p className="text-[#A0A8AF] mb-6">
                While certification services are pending accreditation, we currently provide comprehensive advisory support including:
              </p>
              <ul className="space-y-3" aria-label="Advisory services">
                {advisoryServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#55B7AE] shrink-0 mt-0.5" size={18} aria-hidden="true" />
                    <span className="text-[#D9DEE3] text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="iso-cta-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="iso-cta-heading" className="text-[#2E3A44] mb-4">
              Strengthen Your Security Posture
            </h2>
            <p className="text-[#7A8792] text-xl mb-10">
              Let's discuss how ISO 27001 frameworks can enhance your organization's security governance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all shadow hover:shadow-md hover:-translate-y-0.5 text-lg"
            >
              Talk to Our Security Experts
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const benefits = [
  {
    icon: Shield,
    title: 'Enhanced Security Posture',
    description: 'Systematic approach to identifying and managing information security risks across your organization.',
  },
  {
    icon: Globe,
    title: 'Regulatory Compliance',
    description: 'Meet regulatory requirements and demonstrate compliance to stakeholders and clients.',
  },
  {
    icon: Award,
    title: 'Business Credibility',
    description: 'ISO 27001 certification demonstrates commitment to security best practices to customers and partners.',
  },
  {
    icon: AlertCircle,
    title: 'Risk Management',
    description: 'Structured framework for identifying, assessing, and mitigating information security risks.',
  },
];

const capabilities = [
  {
    title: 'Security Architecture Design',
    description: 'Building secure technology environments aligned with ISO 27001 controls and requirements.',
  },
  {
    title: 'Risk Management Frameworks',
    description: 'Implementing systematic risk assessment and treatment processes.',
  },
  {
    title: 'Compliance Readiness',
    description: 'Preparing organizations for ISO 27001 certification audits and assessments.',
  },
  {
    title: 'Governance Structure',
    description: 'Establishing information security governance, roles, and responsibilities.',
  },
  {
    title: 'Policy Development',
    description: 'Creating comprehensive security policies and procedures aligned with the standard.',
  },
  {
    title: 'Continuous Improvement',
    description: 'Supporting ongoing security management and continuous improvement processes.',
  },
];

const advisoryServices = [
  'Gap analysis against ISO 27001 requirements',
  'Security policy and procedure development',
  'Risk assessment and treatment planning',
  'Security control implementation guidance',
  'Internal audit preparation',
  'Management system documentation',
  'Staff training and awareness programs',
  'Pre-certification readiness assessment',
];
