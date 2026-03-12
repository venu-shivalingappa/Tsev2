import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: '',
    serviceInterest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full px-4 py-3 border border-[#D9DEE3] rounded-lg bg-white text-[#2E3A44] placeholder-[#A0A8AF] focus:outline-none focus:ring-2 focus:ring-[#55B7AE] focus:border-transparent transition-all';

  return (
    <div className="bg-white">

      {/* Hero */}
      <section
        aria-labelledby="contact-hero-heading"
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
              Get in Touch
            </span>
            <h1 id="contact-hero-heading" className="text-[#2E3A44] mb-5">
              Let's Build the Right Technology Foundation
            </h1>
            <p className="text-[#7A8792] text-xl">
              Connect with our team to discuss your technology needs and explore how we can support your business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section aria-label="Contact information and form" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <aside aria-label="Contact details" className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-[#2E3A44] mb-6">Contact Information</h2>
                <ul className="space-y-5" role="list">
                  <li>
                    <a
                      href="mailto:contact@techsolveengine.com"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-[#F0FAF9] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#55B7AE] transition-colors">
                        <Mail className="text-[#55B7AE] group-hover:text-white transition-colors" size={22} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2E3A44] mb-0.5">Email</p>
                        <p className="text-[#7A8792] text-sm group-hover:text-[#55B7AE] transition-colors">contact@techsolveengine.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91XXXXXXXXXX" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-[#F0FAF9] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#55B7AE] transition-colors">
                        <Phone className="text-[#55B7AE] group-hover:text-white transition-colors" size={22} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2E3A44] mb-0.5">Phone</p>
                        <p className="text-[#7A8792] text-sm">+91 XXX XXX XXXX</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F0FAF9] rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-[#55B7AE]" size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2E3A44] mb-0.5">Location</p>
                      <p className="text-[#7A8792] text-sm">India</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F0FAF9] rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="text-[#55B7AE]" size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2E3A44] mb-0.5">Office Hours</p>
                      <p className="text-[#7A8792] text-sm">Mon–Fri, 9:00 AM – 6:00 PM IST</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What Happens Next */}
              <div className="bg-[#F5F7F9] rounded-xl p-6 border border-[#D9DEE3]">
                <h3 className="text-[#2E3A44] mb-4">What Happens Next?</h3>
                <ol className="space-y-4" aria-label="Process steps">
                  {[
                    { step: '1', title: 'We Review Your Inquiry', desc: 'Our team reviews your requirements and business context.' },
                    { step: '2', title: 'Initial Discussion', desc: 'We schedule a conversation to understand your needs in detail.' },
                    { step: '3', title: 'Tailored Approach', desc: 'We develop a customized approach aligned with your objectives.' },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-full text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                        style={{ background: 'linear-gradient(135deg, #55B7AE 0%, #3EA39A 100%)' }}
                        aria-hidden="true"
                      >
                        {item.step}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2E3A44]">{item.title}</p>
                        <p className="text-xs text-[#7A8792] mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F0FAF9] border border-[#55B7AE]/20 rounded-2xl p-12 text-center"
                >
                  <div className="w-16 h-16 bg-[#55B7AE] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-white" size={32} aria-hidden="true" />
                  </div>
                  <h2 className="text-[#2E3A44] mb-3">Thank You!</h2>
                  <p className="text-[#7A8792] text-lg">
                    Your inquiry has been received. Our team will get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-[#F5F7F9] p-8 rounded-2xl border border-[#D9DEE3]"
                >
                  <h2 className="text-[#2E3A44] mb-8">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Contact form">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#2E3A44] mb-2">
                          Full Name <span aria-label="required" className="text-[#55B7AE]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-[#2E3A44] mb-2">
                          Company <span aria-label="required" className="text-[#55B7AE]">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          autoComplete="organization"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#2E3A44] mb-2">
                          Email Address <span aria-label="required" className="text-[#55B7AE]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#2E3A44] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="+91 XXX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="role" className="block text-sm font-semibold text-[#2E3A44] mb-2">
                          Your Role
                        </label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select your role</option>
                          <option value="founder">Founder / CEO</option>
                          <option value="cto">CTO / Technology Head</option>
                          <option value="cio">CIO / IT Head</option>
                          <option value="manager">IT Manager</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="serviceInterest" className="block text-sm font-semibold text-[#2E3A44] mb-2">
                          Service Interest
                        </label>
                        <select
                          id="serviceInterest"
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select a service</option>
                          <option value="strategy">Technology Strategy</option>
                          <option value="infrastructure">Infrastructure & Networking</option>
                          <option value="cloud">Cloud Engineering</option>
                          <option value="security">Cybersecurity</option>
                          <option value="devops">DevOps</option>
                          <option value="managed">Managed Operations</option>
                          <option value="compliance">Security & Compliance</option>
                          <option value="global">Global Expansion</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#2E3A44] mb-2">
                        Message <span aria-label="required" className="text-[#55B7AE]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your technology needs and business objectives..."
                        className={inputClass}
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all shadow hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#55B7AE]"
                    >
                      Send Message
                      <Send size={18} aria-hidden="true" />
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
