import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="min-h-[70vh] flex items-center justify-center"
      style={{ background: 'linear-gradient(160deg, #F5F7F9 0%, #ffffff 100%)' }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="text-8xl font-bold mb-4"
          style={{ fontFamily: 'Poppins, sans-serif', color: '#55B7AE' }}
          aria-hidden="true"
        >
          404
        </div>
        <h1 className="text-[#2E3A44] mb-4">Page Not Found</h1>
        <p className="text-[#7A8792] text-xl mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#55B7AE] hover:bg-[#3EA39A] text-white rounded-lg font-semibold transition-all shadow hover:shadow-md hover:-translate-y-0.5"
          >
            <Home size={18} aria-hidden="true" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#2E3A44] border border-[#D9DEE3] rounded-lg font-semibold hover:bg-[#F5F7F9] transition-all"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
