import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#3e2723] text-gray-300 py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            BrewCart
          </h2>
          <p className="text-sm leading-relaxed">
            Premium freshly roasted coffee delivered straight to your doorstep.
            Experience rich aroma, bold flavor, and unforgettable moments in every cup.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Return Policy</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">📧 support@brewcart.com</p>
          <p className="text-sm mb-2">📞 +91 98765 43210</p>
          <p className="text-sm">📍 Hyderabad, India</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} BrewCart. All Rights Reserved. This site made with 💖 by Srilatha.
      </div>
    </footer>
  );
}

export default Footer;