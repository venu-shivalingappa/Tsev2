import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Globe,
  Server,
  Cloud,
  Shield,
  CheckCircle2,
  ArrowRight,
  Building2,
  Settings,
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function GlobalExpansion() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section
        aria-labelledby="global-hero-heading"
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
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
              aria-hidden="true"
            >
              <Globe className="text-white" size={40} />
            </div>
            <span className="inline-block px-4 py-1.5 bg-[#F0FAF9] border border-[#55B7AE]/20 text-[#55B7AE] text-sm font-semibold rounded-full mb-6">
              Global Expansion
            </span>
            <h1 id="global-hero-heading" className="text-[#2E3A44] mb-5">
              Global Companies Expanding into India
            </h1>
            <p className="text-[#7A8792] text-xl">
              Reliable technology infrastructure for international operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section aria-labelledby="global-intro-heading" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="global-intro-heading" className="text-[#2E3A44] mb-6">
                Technology Infrastructure for International Expansion
              </h2>
              <div className="space-y-5 text-[#7A8792]">
                <p>
                  International organizations expanding into India require reliable technology infrastructure, secure environments, and operational readiness.
                </p>
                <p>
                  Tech Solve Engine supports global businesses establishing operations in India by providing comprehensive technology infrastructure and support services that ensure smooth market entry and operational excellence.
                </p>
                <p className="text-[#2E3A44] font-medium">
                  Our team ensures technology environments are aligned with both global standards and local operational requirements.
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
                alt="Global business cityscape representing international technology operations"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services for Global Companies */}
      <section aria-labelledby="global-services-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 id="global-services-heading" className="text-[#2E3A44] mb-4">How We Support Global Expansion</h2>
            <p className="text-[#7A8792] max-w-2xl mx-auto">
              Comprehensive technology services designed for international organizations entering the Indian market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-xl border border-[#D9DEE3] shadow-sm hover:border-[#55B7AE]/30 hover:shadow-md transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
                  aria-hidden="true"
                >
                  <service.icon className="text-white" size={22} />
                </div>
                <h3 className="text-[#2E3A44] mb-3">{service.title}</h3>
                <p className="text-[#7A8792] mb-5 text-sm">{service.description}</p>
                <ul className="space-y-2" aria-label={`${service.title} details`}>
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-[#5A6570] text-sm">
                      <CheckCircle2 className="text-[#55B7AE] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why TSE */}
      <section aria-labelledby="why-tse-global-heading" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="why-tse-global-heading" className="text-[#2E3A44] mb-8">
                Why Partner with Tech Solve Engine?
              </h2>
              <ul className="space-y-6" aria-label="Reasons to partner with TSE">
                {whyTSE.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
                      aria-hidden="true"
                    >
                      <CheckCircle2 className="text-white" size={18} />
                    </div>
                    <div>
                      <h3 className="text-[#2E3A44] mb-1">{item.title}</h3>
                      <p className="text-[#7A8792] text-sm">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#F5F7F9] p-10 rounded-2xl border border-[#D9DEE3]"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
                aria-hidden="true"
              >
                <Building2 className="text-white" size={30} />
              </div>
              <h3 className="text-[#2E3A44] mb-4">From Day One to Long-Term Growth</h3>
              <p className="text-[#7A8792] mb-5 text-sm leading-relaxed">
                We understand the unique challenges of international expansion. Our approach ensures your technology infrastructure is ready from day one and scales with your business growth in India.
              </p>
              <p className="text-[#7A8792] text-sm leading-relaxed">
                Whether you're opening your first office or expanding to multiple locations, Tech Solve Engine provides the technology foundation you need.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section
        aria-labelledby="considerations-heading"
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
            className="max-w-4xl mx-auto"
          >
            <h2 id="considerations-heading" className="text-white mb-10 text-center">
              Key Technology Considerations for India Expansion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {considerations.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-[#3F4A54] p-6 rounded-xl border border-white/5 hover:border-[#55B7AE]/20 transition-all"
                >
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="text-[#A0A8AF] text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="global-cta-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="global-cta-heading" className="text-[#2E3A44] mb-4">
              Ready to Expand into India?
            </h2>
            <p className="text-[#7A8792] text-xl mb-10">
              Let's discuss how we can support your technology infrastructure needs for India operations.
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

const services = [
  {
    icon: Server,
    title: 'Infrastructure Setup',
    description: 'Complete office technology infrastructure designed for reliability and growth.',
    details: [
      'Network infrastructure design and implementation',
      'Office connectivity and wireless systems',
      'Server and storage infrastructure',
      'Multi-site connectivity architecture',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Environments',
    description: 'Cloud infrastructure aligned with global standards and local requirements.',
    details: [
      'Cloud architecture design',
      'Hybrid cloud environments',
      'Data residency compliance',
      'Global-local connectivity optimization',
    ],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Security frameworks meeting both international and local requirements.',
    details: [
      'Security architecture design',
      'Compliance with Indian regulations',
      'Data protection frameworks',
      'Identity and access management',
    ],
  },
  {
    icon: Settings,
    title: 'Operational Readiness',
    description: 'Ensuring technology environments are ready for business operations.',
    details: [
      'Technology deployment planning',
      'User onboarding support',
      'Managed operations services',
      'Continuous support and optimization',
    ],
  },
];

const whyTSE = [
  {
    title: 'Global Standards, Local Expertise',
    description: 'We understand both international best practices and local operational requirements in India.',
  },
  {
    title: 'End-to-End Support',
    description: 'From initial planning to ongoing operations, we provide comprehensive technology support.',
  },
  {
    title: 'Proven Track Record',
    description: 'Over 20 years of experience supporting organizations in India and understanding their unique needs.',
  },
  {
    title: 'Single Point of Contact',
    description: 'One trusted partner for all your technology infrastructure needs in India.',
  },
];

const considerations = [
  {
    title: 'Connectivity',
    description: 'Reliable connectivity between global headquarters and India operations is critical for seamless collaboration.',
  },
  {
    title: 'Data Residency',
    description: 'Understanding and complying with data localization and residency requirements in India.',
  },
  {
    title: 'Security Standards',
    description: 'Maintaining global security standards while meeting local compliance requirements.',
  },
  {
    title: 'Scalability',
    description: 'Infrastructure designed to scale as your India operations grow and expand to new locations.',
  },
  {
    title: 'Support Coverage',
    description: 'Local technology support aligned with your business hours and operational needs.',
  },
  {
    title: 'Cost Optimization',
    description: 'Right-sized infrastructure investments that balance capability with cost-effectiveness.',
  },
];
