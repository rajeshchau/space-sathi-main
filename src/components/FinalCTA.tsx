import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTA = () => (
  <section
    className="py-28"
    style={{
      background: "linear-gradient(180deg, hsl(210 40% 98%) 0%, hsl(226 100% 97%) 100%)",
    }}
  >
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-semibold text-foreground leading-tight mb-4">
          Start Listing Your Shop Today
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-7">
          Join thousands of shop owners across India who are connecting directly with renters — without brokers or hidden fees.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/create-listing">
            <Button
              className="font-body font-semibold text-base px-7 py-[14px] h-auto rounded-[10px] bg-[#2563EB] text-white hover:bg-[#1D4ED8] hover:-translate-y-px transition-all duration-200 shadow-sm"
            >
              List Your Shop <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link to="/browse">
            <Button
              variant="outline"
              className="font-body font-medium text-base px-7 py-[14px] h-auto rounded-[10px] border-[1.5px] border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#2563EB]/[0.08] transition-all duration-200"
            >
              Browse Available Shops
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
