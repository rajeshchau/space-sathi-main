import { motion } from "framer-motion";
import { Search, MapPin, IndianRupee, Maximize, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

const SearchSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className={`${container} space-y-8`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-6">Smart Search</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-foreground">
            Find Your Perfect Shop
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">Use our intelligent search to find the ideal commercial space.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="w-full"
        >
          <div className="rounded-xl border bg-card shadow-sm hover:shadow-md transition p-8">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border/50 mb-6">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Search shops by location, city, or type..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base font-body"
              />
              <Link to="/browse">
                <Button variant="cta" size="sm">Search</Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1 uppercase tracking-wider">
                  <MapPin className="w-3 h-3" /> City
                </label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-2 border rounded-lg bg-background text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all border-border/50">
                    <option>All Cities</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Ahmedabad</option>
                    <option>Surat</option>
                    <option>Bangalore</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1 uppercase tracking-wider">
                  <IndianRupee className="w-3 h-3" /> Rent Range
                </label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-2 border rounded-lg bg-background text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all border-border/50">
                    <option>Any Budget</option>
                    <option>₹5K – ₹15K</option>
                    <option>₹15K – ₹30K</option>
                    <option>₹30K – ₹50K</option>
                    <option>₹50K+</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1 uppercase tracking-wider">
                  <Maximize className="w-3 h-3" /> Shop Size
                </label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-2 border rounded-lg bg-background text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all border-border/50">
                    <option>Any Size</option>
                    <option>Under 300 sq ft</option>
                    <option>300–500 sq ft</option>
                    <option>500–1000 sq ft</option>
                    <option>1000+ sq ft</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1 uppercase tracking-wider">
                  <Maximize className="w-3 h-3" /> Floor
                </label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-2 border rounded-lg bg-background text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all border-border/50">
                    <option>Any Floor</option>
                    <option>Ground</option>
                    <option>First</option>
                    <option>Second+</option>
                    <option>Basement</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-primary/[0.04] border border-primary/10 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4.5 h-4.5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">AI Powered Suggestion</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Let our AI recommend the ideal area based on your business type and budget.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;
