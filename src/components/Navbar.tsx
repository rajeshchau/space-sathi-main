import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Store, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Browse Shops", to: "/browse" },
  { label: "Pricing", to: "/pricing" },
  { label: "AI Tools", to: "/ai-tools" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        setScrolled(window.scrollY >= heroSection.offsetHeight - 64);
      } else {
        // No hero section = always use light navbar
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: scrolled ? "#FFFFFF" : "transparent",
        boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
            <Store className="w-5 h-5 text-primary-foreground" />
          </div>
          <span
            className="font-bold text-xl tracking-tight transition-colors duration-300"
            style={{ color: scrolled ? "#111827" : "#FFFFFF" }}
          >
            Shop<span className={scrolled ? "text-primary" : "text-gradient-saffron"}>Lease</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname === link.to
                  ? scrolled
                    ? "text-primary bg-primary/5"
                    : "text-accent bg-accent/10"
                  : scrolled
                    ? "text-[#111827]/70 hover:text-[#111827] hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2.5">
          <Link to="/login">
            <Button
              variant="ghost"
              size="sm"
              className={`font-medium transition-all duration-300 ${
                scrolled
                  ? "text-[#111827]/70 hover:text-[#111827] hover:bg-gray-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Log In
            </Button>
          </Link>
          <Link to="/create-listing">
            <Button variant="cta" size="sm" className="gap-1.5">
              List Your Shop <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            scrolled ? "text-[#111827] hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden backdrop-blur-2xl border-t p-4 space-y-1 animate-fade-in"
          style={{
            backgroundColor: scrolled ? "#FFFFFF" : "rgba(30,41,59,0.95)",
            borderColor: scrolled ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block text-sm font-medium py-2.5 px-3 rounded-lg transition-all ${
                scrolled
                  ? "text-[#111827]/70 hover:text-[#111827] hover:bg-gray-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-4 border-t border-border/40 mt-3">
            <Link to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full" size="sm">Log In</Button>
            </Link>
            <Link to="/create-listing" className="flex-1" onClick={() => setIsOpen(false)}>
              <Button variant="cta" className="w-full" size="sm">List Shop</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
