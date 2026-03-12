import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Target, Cpu, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section
        aria-labelledby="about-hero-heading"
        className="py-24 lg:py-32"
        style={{ background: 'linear-gradient(160deg, #F5F7F9 0%, #ffffff 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#F0FAF9] border border-[#55B7AE]/20 text-[#55B7AE] text-sm font-semibold rounded-full mb-6">
                About Us
              </span>
              <h1 id="about-hero-heading" className="text-[#2E3A44] mb-5">
                About Tech Solve Engine
              </h1>
              <p className="text-[#7A8792] text-xl">
                Engineering the technology backbone of modern businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section aria-labelledby="who-we-are-heading" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="who-we-are-heading" className="text-[#2E3A44] mb-6">Who We Are</h2>
              <div className="space-y-5 text-[#7A8792]">
                <p>
                  Tech Solve Engine is a strategic technology partner focused on designing, building, and operating reliable technology environments for organizations that understand technology as a business enabler, not just a cost center.
                </p>
                <p>
                  We work with founders, CEOs, CTOs, and technology leaders who recognize that the right technology foundation is essential for sustainable business growth.
                </p>
                <p className="text-[#2E3A44] font-medium">
                  Our approach combines strategic business thinking with disciplined engineering to create technology environments that remain secure, scalable, and reliable over multi-year timelines.
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="Technology team collaborating on a project in a modern office environment"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 id="philosophy-heading" className="text-[#2E3A44] mb-4">Our Philosophy</h2>
            <p className="text-[#7A8792] text-xl max-w-2xl mx-auto">
              Technology should enable business growth, not disrupt it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl border border-[#D9DEE3] shadow-sm hover:border-[#55B7AE]/30 hover:shadow-md transition-all text-center"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
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

      {/* Our Journey */}
      <section aria-labelledby="journey-heading" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 id="journey-heading" className="text-[#2E3A44] mb-6">Our Journey</h2>
              <div className="space-y-5 text-[#7A8792]">
                <p>
                  Over the past two decades, Tech Solve Engine has helped organizations build reliable technology foundations that support long-term growth.
                </p>
                <p>
                  We've witnessed the evolution of technology from on-premise data centers to cloud-native architectures, from perimeter security to zero-trust frameworks, and from manual operations to infrastructure-as-code.
                </p>
                <p>
                  Through this evolution, one principle has remained constant:{' '}
                  <strong className="text-[#2E3A44]">technology must be designed with business outcomes in mind.</strong>
                </p>
                <p>
                  Our experience spans startups scaling rapidly, established enterprises modernizing infrastructure, and international organizations expanding into new markets. Each engagement has reinforced our commitment to engineering excellence and long-term partnership.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section
        aria-labelledby="drives-heading"
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
            <h2 id="drives-heading" className="text-white mb-6">What Drives Us</h2>
            <div className="space-y-5 text-[#A0A8AF]">
              <p>
                We are driven by the opportunity to solve complex technology challenges that enable business growth.
              </p>
              <p>
                Every organization we work with has unique goals, constraints, and opportunities. Our role is to design technology environments that align with these realities while maintaining security, reliability, and scalability.
              </p>
              <p className="text-white font-semibold text-xl">
                When our clients succeed in their business objectives supported by solid technology foundations, we consider that the ultimate measure of our success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section aria-labelledby="commitment-heading" className="py-20 bg-[#F5F7F9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 id="commitment-heading" className="text-[#2E3A44] mb-4">Our Commitment to Clients</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-5 bg-white p-6 rounded-xl border border-[#D9DEE3] shadow-sm hover:border-[#55B7AE]/30 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg text-white flex items-center justify-center font-bold text-sm shrink-0"
                  style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
                  aria-hidden="true"
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-[#2E3A44] mb-1">{commitment.title}</h3>
                  <p className="text-[#7A8792] text-sm leading-relaxed">{commitment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="about-cta-heading" className="py-20 bg-[#2E3A44]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="about-cta-heading" className="text-white mb-5">
              Let's Build Something Reliable Together
            </h2>
            <p className="text-[#A0A8AF] text-xl mb-10">
              If you're looking for a technology partner that understands both business and engineering, let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
            >
              Start a Conversation
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const philosophy = [
  {
    icon: Target,
    title: 'Responsible Engineering',
    description: 'We build technology environments with long-term thinking, not short-term shortcuts.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Architecture',
    description: 'Our solutions are designed to support 3–5 years of growth without major disruptions.',
  },
  {
    icon: Cpu,
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly. We stay current with best practices and emerging standards.',
  },
];

const commitments = [
  {
    title: 'Honest Assessment',
    description: 'We provide honest evaluations of technology needs, even when it means recommending less expensive solutions.',
  },
  {
    title: 'Engineering Excellence',
    description: 'Every solution is built on sound engineering principles with attention to security, reliability, and scalability.',
  },
  {
    title: 'Transparent Communication',
    description: 'We explain technical decisions in business terms and keep clients informed throughout every engagement.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We measure success by long-term client relationships, not short-term transactions.',
  },
  {
    title: 'Business Alignment',
    description: 'Every technology decision is evaluated against business objectives and operational requirements.',
  },
];
