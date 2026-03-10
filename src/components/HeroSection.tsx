import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6 max-w-[720px]"
      >
        {/* Tagline badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 font-body text-[13px] font-medium tracking-[0.1em] uppercase text-white/85 mb-[18px]"
        >
          Commercial Spaces Across India
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-heading font-semibold text-[clamp(2.5rem,5.5vw,3.75rem)] leading-[1.1] tracking-[-0.02em] text-white mb-[22px]"
        >
          Find the Perfect Shop for Your Business
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="font-body text-[19px] font-normal leading-[1.6] text-white/90 max-w-[620px] mx-auto mb-8"
        >
          Discover verified commercial spaces across India or list your shop and connect with serious business owners looking for the perfect location.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          <Link to="/browse">
            <Button
              size="lg"
              className="px-7 py-[14px] h-auto text-base rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-body font-semibold tracking-[0.02em]"
            >
              Find a Shop <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link to="/create-listing">
            <Button
              size="lg"
              className="px-7 py-[14px] h-auto text-base rounded-xl bg-transparent border-2 border-white/70 text-white hover:bg-white hover:text-foreground transition-all duration-300 font-body font-semibold tracking-[0.02em]"
            >
              List Your Shop
            </Button>
          </Link>
        </motion.div>

        {/* Trust text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-body text-[13px] font-normal text-white/60"
        >
          Trusted by shop owners and entrepreneurs across India.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
