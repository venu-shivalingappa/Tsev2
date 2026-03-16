import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import tseLogo from '../../assets/logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Approach', path: '/approach' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'ISO 27001', path: '/iso-27001' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 shadow-sm backdrop-blur-md border-b border-[#D9DEE3]'
          : 'bg-white border-b border-[#D9DEE3]'
      }`}
      role="banner"
    >
      {/* Skip to main content — accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="Tech Solve Engine — Home"
          >
            <img
              src={tseLogo}
              alt="Tech Solve Engine logo — Ignite Innovations"
              className="h-16 w-auto"
              width={200}
              height={64}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-4 py-2 text-[0.9375rem] rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#55B7AE] ${
                    active
                      ? 'text-[#55B7AE] font-semibold'
                      : 'text-[#5A6570] hover:text-[#2E3A44] hover:bg-[#F5F7F9] font-medium'
                  }`}
                >
                  {item.name}
                  {active && (
                    <span
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#55B7AE] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg transition-all duration-200 text-[0.9375rem] font-semibold shadow-sm hover:shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#55B7AE]"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden p-2.5 rounded-lg text-[#5A6570] hover:text-[#2E3A44] hover:bg-[#F5F7F9] transition-colors focus-visible:ring-2 focus-visible:ring-[#55B7AE]"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="lg:hidden py-4 border-t border-[#D9DEE3]"
          >
            <ul className="space-y-1" role="list">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center px-4 py-3 rounded-lg text-base transition-colors ${
                        active
                          ? 'text-[#55B7AE] bg-[#F0FAF9] font-semibold'
                          : 'text-[#5A6570] hover:text-[#2E3A44] hover:bg-[#F5F7F9] font-medium'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-[#D9DEE3] px-4">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full px-5 py-3 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}