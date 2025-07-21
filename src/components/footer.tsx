'use client';
// 👈 ADD THIS AT THE TOP
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h3 className="text-xl font-semibold mb-3">Ethio Car Rental</h3>
          <p className="text-sm">
            Your trusted platform for booking rental cars across Ethiopia. Safe, simple, and fast.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/cars" className="hover:underline">Cars</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-medium mb-3">Contact Us</h4>
          <p className="text-sm">Addis Ababa, Ethiopia</p>
          <p className="text-sm">Phone: +251 911 123 456</p>
          <p className="text-sm">Email: info@ethiorental.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Ethio Car Rental. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
