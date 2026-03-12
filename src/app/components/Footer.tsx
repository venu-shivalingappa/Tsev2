import { Link } from 'react-router';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';
import tseLogo from 'figma:asset/e931ab4c03f17ef1b0518c12ce1dd505e2334af3.png';

const footerNav = {
  company: [
    { name: 'Approach', path: '/approach' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About Us', path: '/about' },
  ],
  services: [
    { name: 'Technology Strategy', path: '/solutions' },
    { name: 'Infrastructure & Networking', path: '/solutions' },
    { name: 'Cloud Engineering', path: '/solutions' },
    { name: 'Cybersecurity', path: '/solutions' },
    { name: 'DevOps & Automation', path: '/solutions' },
    { name: 'Managed Operations', path: '/solutions' },
  ],
  compliance: [
    { name: 'ISO 27001 Framework', path: '/iso-27001' },
    { name: 'Global Expansion', path: '/global-expansion' },
    { name: 'Security Governance', path: '/iso-27001' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#2E3A44] text-[#D9DEE3]" aria-label="Site footer">
      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="Tech Solve Engine home" className="inline-block mb-6">
              <img
                src={tseLogo}
                alt="Tech Solve Engine"
                className="h-16 w-auto brightness-0 invert"
                width={200}
                height={64}
              />
            </Link>
            <p className="text-sm leading-relaxed text-[#A0A8AF] mb-6">
              Strategic Technology Partner designing, building, securing, and operating technology infrastructure for modern businesses.
            </p>
            <p className="text-xs text-[#7A8792] italic">Ignite Innovations</p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6" aria-label="Social media links">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tech Solve Engine on LinkedIn (opens in new tab)"
                className="w-9 h-9 rounded-lg bg-[#3F4A54] hover:bg-[#55B7AE] flex items-center justify-center text-[#A0A8AF] hover:text-white transition-all"
              >
                <Linkedin size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tech Solve Engine on Twitter (opens in new tab)"
                className="w-9 h-9 rounded-lg bg-[#3F4A54] hover:bg-[#55B7AE] flex items-center justify-center text-[#A0A8AF] hover:text-white transition-all"
              >
                <Twitter size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.techsolveengine.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tech Solve Engine website (opens in new tab)"
                className="w-9 h-9 rounded-lg bg-[#3F4A54] hover:bg-[#55B7AE] flex items-center justify-center text-[#A0A8AF] hover:text-white transition-all"
              >
                <Globe size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Company
            </h3>
            <nav aria-label="Company navigation">
              <ul className="space-y-3" role="list">
                {footerNav.company.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-[#A0A8AF] hover:text-[#55B7AE] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Services
            </h3>
            <nav aria-label="Services navigation">
              <ul className="space-y-3" role="list">
                {footerNav.services.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-sm text-[#A0A8AF] hover:text-[#55B7AE] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Contact
            </h3>
            <address className="not-italic">
              <ul className="space-y-4" role="list">
                <li>
                  <a
                    href="mailto:contact@techsolveengine.com"
                    className="flex items-start gap-3 text-sm text-[#A0A8AF] hover:text-[#55B7AE] transition-colors group"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0 group-hover:text-[#55B7AE]" aria-hidden="true" />
                    <span>contact@techsolveengine.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="flex items-start gap-3 text-sm text-[#A0A8AF] hover:text-[#55B7AE] transition-colors group"
                  >
                    <Phone size={16} className="mt-0.5 shrink-0 group-hover:text-[#55B7AE]" aria-hidden="true" />
                    <span>+91 XXX XXX XXXX</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#A0A8AF]">
                  <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>India</span>
                </li>
              </ul>
            </address>

            <div className="mt-8 p-4 bg-[#3F4A54] rounded-xl">
              <p className="text-xs text-[#A0A8AF] mb-1 font-medium uppercase tracking-wide">Office Hours</p>
              <p className="text-sm text-[#D9DEE3]">Mon – Fri, 9:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#3F4A54] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7A8792]">
            &copy; {new Date().getFullYear()} Tech Solve Engine. All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex items-center gap-6" role="list">
              <li>
                <Link to="/contact" className="text-xs text-[#7A8792] hover:text-[#55B7AE] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs text-[#7A8792] hover:text-[#55B7AE] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}