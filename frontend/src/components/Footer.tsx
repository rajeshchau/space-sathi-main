import { Store, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-card relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container py-12 md:py-16 space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-6">
        {/* Brand */}
        <div className="col-span-2 md:col-span-4">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
              <Store className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">ShopLease</span>
          </Link>
          <p className="text-sm text-card/40 max-w-xs leading-relaxed mb-4">
            India's smartest marketplace for renting commercial shops. No brokers, no hassle — just smart connections.
          </p>
          <div className="flex flex-col gap-3">
            <a href="mailto:hello@shoplease.in" className="flex items-center gap-2.5 text-sm text-card/40 hover:text-card transition-colors">
              <Mail className="w-4 h-4" /> hello@shoplease.in
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2.5 text-sm text-card/40 hover:text-card transition-colors">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </a>
            <span className="flex items-center gap-2.5 text-sm text-card/40">
              <MapPin className="w-4 h-4" /> Mumbai, India
            </span>
          </div>
        </div>

        {/* Platform */}
        <div className="md:col-span-2">
          <h4 className="font-heading font-bold uppercase tracking-wider text-xs text-card/60 mb-6">Platform</h4>
          <ul className="space-y-3 text-sm text-card/40">
            <li><Link to="/browse" className="hover:text-card transition-colors">Browse Shops</Link></li>
            <li><Link to="/create-listing" className="hover:text-card transition-colors">List Your Shop</Link></li>
            <li><Link to="/pricing" className="hover:text-card transition-colors">Pricing</Link></li>
            <li><Link to="/ai-tools" className="hover:text-card transition-colors">AI Tools</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-2">
          <h4 className="font-heading font-bold uppercase tracking-wider text-xs text-card/60 mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-card/40">
            <li><a href="#" className="hover:text-card transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Careers</a></li>
            <li><Link to="/blog" className="hover:text-card transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-card transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:col-span-2">
          <h4 className="font-heading font-bold uppercase tracking-wider text-xs text-card/60 mb-6">Resources</h4>
          <ul className="space-y-3 text-sm text-card/40">
            <li><a href="#" className="hover:text-card transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Location Guides</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Rental Tips</a></li>
            <li><a href="#" className="hover:text-card transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="md:col-span-2">
          <h4 className="font-heading font-bold uppercase tracking-wider text-xs text-card/60 mb-6">Legal</h4>
          <ul className="space-y-3 text-sm text-card/40">
            <li><a href="#" className="hover:text-card transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-card transition-colors">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-card/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-card/25">© 2026 ShopLease. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-card/25 hover:text-card transition-colors text-sm">Instagram</a>
          <a href="#" className="text-card/25 hover:text-card transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-card/25 hover:text-card transition-colors text-sm">Twitter</a>
          <a href="#" className="text-card/25 hover:text-card transition-colors text-sm">YouTube</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
