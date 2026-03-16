import { Link } from "react-router";
import { motion } from "motion/react";
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
} from "lucide-react";

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        aria-labelledby="solutions-hero-heading"
        className="py-24 lg:py-32"
        style={{
          background:
            "linear-gradient(160deg, #F5F7F9 0%, #ffffff 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-[#F0FAF9] border border-[#55B7AE]/20 text-[#55B7AE] text-sm font-semibold rounded-full mb-6">
              Technology Solutions
            </span>
            <h1
              id="solutions-hero-heading"
              className="text-[#2E3A44] mb-5"
            >
              Technology Solutions
            </h1>
            <p className="text-[#7A8792] text-xl">
              Engineering the technology backbone businesses
              depend on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section
        aria-label="Our solutions"
        className="py-20 bg-white"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.article
                key={solution.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="bg-[#F5F7F9] rounded-xl p-8 border border-[#D9DEE3] hover:border-[#55B7AE]/30 hover:shadow-md transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)",
                  }}
                  aria-hidden="true"
                >
                  <solution.icon
                    className="text-white"
                    size={26}
                  />
                </div>
                <h2 className="text-[#2E3A44] mb-3">
                  {solution.title}
                </h2>
                <p className="text-[#7A8792] mb-6">
                  {solution.description}
                </p>
                <div>
                  <p className="font-semibold text-[#2E3A44] text-sm mb-3 uppercase tracking-wide">
                    Capabilities include:
                  </p>
                  <ul
                    className="space-y-2"
                    aria-label={`Capabilities for ${solution.title}`}
                  >
                    {solution.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-2 text-[#5A6570] text-sm"
                      >
                        <CheckCircle2
                          className="text-[#55B7AE] shrink-0 mt-0.5"
                          size={16}
                          aria-hidden="true"
                        />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Stack */}
      <section
        aria-labelledby="integrated-stack-heading"
        className="py-20 bg-[#F5F7F9]"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              id="integrated-stack-heading"
              className="text-[#2E3A44] mb-4"
            >
              Integrated Technology Stack
            </h2>
            <p className="text-[#7A8792] mb-12">
              Our solutions work together to create a
              comprehensive technology environment. From
              strategy and architecture to implementation and
              operations, every component is designed to support
              your business growth.
            </p>

            <div className="bg-white p-8 rounded-xl border border-[#D9DEE3] shadow-sm">
              <ol
                className="space-y-0"
                aria-label="Technology stack layers"
              >
                {connectionSteps.map((step, index) => (
                  <li key={step}>
                    <div className="flex items-center justify-center">
                      <div className="flex-1 text-center py-4 bg-[#F5F7F9] rounded-xl hover:bg-[#F0FAF9] hover:border-[#55B7AE]/20 border border-[#D9DEE3] transition-all">
                        <p className="font-semibold text-[#2E3A44] text-sm">
                          {step}
                        </p>
                      </div>
                    </div>
                    {index < connectionSteps.length - 1 && (
                      <div
                        className="flex justify-center my-2"
                        aria-hidden="true"
                      >
                        <ArrowRight
                          className="text-[#55B7AE] rotate-90"
                          size={22}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section
        aria-labelledby="outcomes-heading"
        className="py-20 bg-white"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              id="outcomes-heading"
              className="text-[#2E3A44] mb-4"
            >
              Business Outcomes
            </h2>
            <p className="text-[#7A8792] max-w-2xl mx-auto">
              Our solutions deliver tangible business value
              through improved efficiency, reduced risk, and
              scalable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="text-center p-8 bg-[#F5F7F9] rounded-xl border border-[#D9DEE3] hover:border-[#55B7AE]/30 hover:shadow-md transition-all"
              >
                <div
                  className="text-4xl font-bold mb-3"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#55B7AE",
                  }}
                  aria-label={`${outcome.metric}: ${outcome.title}`}
                >
                  {outcome.metric}
                </div>
                <h3 className="text-[#2E3A44] mb-2">
                  {outcome.title}
                </h3>
                <p className="text-[#7A8792] text-sm">
                  {outcome.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="solutions-cta-heading"
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, #2E3A44 0%, #3F4A54 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              id="solutions-cta-heading"
              className="text-white mb-5"
            >
              Let's Discuss Your Technology Needs
            </h2>
            <p className="text-[#A0A8AF] text-xl mb-10">
              Every organization has unique requirements. We'll
              work with you to design the right solution for
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all shadow hover:shadow-md hover:-translate-y-0.5 text-lg"
              >
                Talk to Our Experts
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2E3A44] rounded-lg font-semibold hover:bg-[#F5F7F9] transition-all text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const solutions = [
  {
    icon: Target,
    title: "Technology Strategy",
    description:
      "Defining technology roadmaps aligned with business vision, scalability, and operational requirements.",
    capabilities: [
      "Technology roadmap development",
      "Architecture planning",
      "Vendor evaluation and selection",
      "Technology investment optimization",
    ],
  },
  {
    icon: Network,
    title: "Infrastructure & Networking",
    description:
      "Designing stable infrastructure environments that support reliable business operations.",
    capabilities: [
      "Enterprise networking",
      "Office infrastructure",
      "Connectivity architecture",
      "Wireless infrastructure design",
      "Multi-site environments",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description:
      "Building scalable cloud environments designed for performance and flexibility.",
    capabilities: [
      "Cloud architecture design",
      "Hybrid cloud environments",
      "Migration planning",
      "Cloud optimization",
      "Multi-cloud strategy",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protecting organizations with secure architecture and governance frameworks.",
    capabilities: [
      "Security architecture",
      "Identity and access management",
      "Endpoint protection",
      "Risk and compliance alignment",
      "Security operations",
    ],
  },
  {
    icon: Cpu,
    title: "DevOps",
    description:
      "Improving technology operations through automation and modern engineering practices.",
    capabilities: [
      "CI/CD pipelines",
      "Infrastructure automation",
      "Deployment optimization",
      "Containerization",
      "Monitoring and observability",
    ],
  },
  {
    icon: Settings,
    title: "Managed Technology Operations",
    description:
      "Operating technology environments so businesses can focus on growth.",
    capabilities: [
      "Monitoring and maintenance",
      "Performance optimization",
      "Lifecycle management",
      "Incident response",
      "Continuous improvement",
    ],
  },
  {
    icon: FileCheck,
    title: "Information Security & Compliance",
    description:
      "Helping organizations build security governance aligned with international frameworks.",
    capabilities: [
      "ISO 27001 readiness",
      "Governance frameworks",
      "Compliance alignment",
      "Risk management",
      "Security policy development",
    ],
  },
  {
    icon: FileCheck,
    title:
      "Industrial & OT Security — Securing Industrial Technology",
    description:
      "Robust security for industrial systems with OS hardening, automation protection, and embedded systems security.",
    capabilities: [
      "OS Hardening (Windows / Linux)",
      "Industrial Automation IT/OT Security",
      "Embedded Systems Security",
      "Solution architecture validated by global industrial principals ",
    ],
  },
];

const connectionSteps = [
  "Business Vision",
  "Technology Strategy",
  "Architecture Design",
  "Engineering Deployment",
  "Security & Governance",
  "DevOps & Automation",
  "Managed Operations",
];

const outcomes = [
  {
    metric: "5–7 Years",
    title: "Scalable Growth",
    description:
      "Architecture designed to support multi-year business expansion",
  },
  {
    metric: "86%",
    title: "Cost Optimization",
    description:
      "Average infrastructure cost reduction through efficient design",
  },
  {
    metric: "99.9%",
    title: "Operational Reliability",
    description:
      "Enterprise-grade uptime and performance standards",
  },
];