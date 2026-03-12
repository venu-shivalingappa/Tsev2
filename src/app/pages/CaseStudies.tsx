import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Building2, TrendingUp, Wifi, Mail, CheckCircle2 } from 'lucide-react';

export default function CaseStudies() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section
        aria-labelledby="case-studies-hero-heading"
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
              Case Studies
            </span>
            <h1 id="case-studies-hero-heading" className="text-[#2E3A44] mb-5">
              Case Studies
            </h1>
            <p className="text-[#7A8792] text-xl">
              Real outcomes delivered through strategic technology architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section aria-label="Case study details" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-[#D9DEE3] rounded-2xl overflow-hidden hover:border-[#55B7AE]/40 hover:shadow-lg transition-all"
              >
                {/* Card header */}
                <div className="p-8 border-b border-[#D9DEE3] bg-[#F5F7F9]">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
                      aria-hidden="true"
                    >
                      <study.icon className="text-white" size={22} />
                    </div>
                    <span className="px-3 py-1 bg-[#F0FAF9] border border-[#55B7AE]/20 text-[#55B7AE] text-xs font-semibold rounded-full">
                      {study.tag}
                    </span>
                  </div>
                  <h2 className="text-[#2E3A44]">{study.title}</h2>
                </div>

                {/* Card body */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold text-[#55B7AE] uppercase tracking-widest mb-2">
                      Client Overview
                    </h3>
                    <p className="text-[#7A8792] text-sm">{study.client}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#55B7AE] uppercase tracking-widest mb-2">
                      Challenge
                    </h3>
                    <p className="text-[#7A8792] text-sm">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#55B7AE] uppercase tracking-widest mb-2">
                      TSE Approach
                    </h3>
                    <p className="text-[#7A8792] text-sm">{study.approach}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#55B7AE] uppercase tracking-widest mb-3">
                      Results
                    </h3>
                    <ul className="space-y-2" aria-label={`Results for ${study.title}`}>
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-[#5A6570] text-sm">
                          <CheckCircle2 className="text-[#55B7AE] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-[#F0FAF9] border border-[#55B7AE]/15 p-5 rounded-xl">
                    <p className="text-xs font-bold text-[#55B7AE] uppercase tracking-widest mb-1">
                      Business Impact
                    </p>
                    <p className="text-xl font-bold text-[#2E3A44]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {study.impact}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="case-studies-cta-heading"
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #2E3A44 0%, #3F4A54 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="case-studies-cta-heading" className="text-white mb-5">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-[#A0A8AF] text-xl mb-10">
              Let's discuss how we can help achieve your technology goals.
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

const caseStudies = [
  {
    icon: Building2,
    tag: 'Startup Scaling',
    title: 'Scaling Technology for a Rapidly Growing Startup',
    client: 'Oben Electric — Electric vehicle manufacturer',
    challenge:
      'Early-stage startup experiencing rapid growth needed a scalable technology backbone to support expansion from initial operations to over 400 employees without disrupting business continuity.',
    approach:
      'Designed and implemented a comprehensive technology architecture including infrastructure, cloud environments, security frameworks, and operational processes aligned with multi-year growth projections.',
    results: [
      'Supported seamless growth from startup to 400+ employees',
      'Zero technology-related business disruptions during scaling',
      'Established secure and compliant technology environment',
      'Created scalable foundation for continued expansion',
    ],
    impact: '400+ employees supported with zero disruption',
  },
  {
    icon: TrendingUp,
    tag: 'Cost Optimization',
    title: 'Infrastructure Architecture Optimization',
    client: 'Growing enterprise organization',
    challenge:
      'Organization was planning an ₹18L infrastructure investment based on vendor recommendations that would have been oversized and operationally complex for their actual needs.',
    approach:
      'Conducted thorough requirements analysis, designed right-sized architecture aligned with actual business needs, and implemented cost-effective solution maintaining all required capabilities.',
    results: [
      'Reduced infrastructure investment from ₹18L to ₹2.5L',
      'Maintained all required operational capabilities',
      'Simplified operational complexity',
      'Improved long-term maintainability',
    ],
    impact: '86% cost reduction — ₹15.5L saved',
  },
  {
    icon: Wifi,
    tag: 'Enterprise WiFi',
    title: 'Enterprise WiFi Network Transformation',
    client: 'Multi-site enterprise organization',
    challenge:
      'Unreliable wireless infrastructure causing frequent connectivity issues, leading to significant productivity losses estimated at ₹11L annually in employee downtime and operational disruption.',
    approach:
      'Redesigned complete wireless infrastructure with enterprise-grade access points, proper network segmentation, centralized management, and comprehensive coverage planning.',
    results: [
      'Eliminated productivity losses from connectivity issues',
      'Improved employee satisfaction and operational efficiency',
      'Established reliable infrastructure for future growth',
      'Reduced IT support burden',
    ],
    impact: '₹11L annual productivity loss eliminated',
  },
  {
    icon: Mail,
    tag: 'Email Security',
    title: 'Email Security Optimization',
    client: 'Security-conscious organization',
    challenge:
      'Organization was paying premium prices for an oversized email security solution that exceeded their actual requirements while creating operational complexity.',
    approach:
      'Evaluated actual security requirements, designed appropriately-sized security architecture, and implemented cost-effective solution maintaining strong security posture.',
    results: [
      'Significant reduction in email security costs',
      'Maintained robust security protection',
      'Simplified operational management',
      'Improved user experience',
    ],
    impact: 'Substantial cost reduction with enhanced security',
  },
];
