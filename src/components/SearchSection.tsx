import { motion } from "framer-motion";
import { Search, MapPin, IndianRupee, Maximize, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SearchSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">Smart Search</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Find Your Perfect Shop
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">Use our intelligent search to find the ideal commercial space.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl shadow-elevated p-8 border border-border/30">
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
                <select className="w-full rounded-xl border border-border/50 bg-background px-3 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>All Cities</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Ahmedabad</option>
                  <option>Surat</option>
                  <option>Bangalore</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1 uppercase tracking-wider">
                  <IndianRupee className="w-3 h-3" /> Rent Range
                </label>
                <select className="w-full rounded-xl border border-border/50 bg-background px-3 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>Any Budget</option>
                  <option>₹5K – ₹15K</option>
                  <option>₹15K – ₹30K</option>
                  <option>₹30K – ₹50K</option>
                  <option>₹50K+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1 uppercase tracking-wider">
                  <Maximize className="w-3 h-3" /> Shop Size
                </label>
                <select className="w-full rounded-xl border border-border/50 bg-background px-3 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>Any Size</option>
                  <option>Under 300 sq ft</option>
                  <option>300–500 sq ft</option>
                  <option>500–1000 sq ft</option>
                  <option>1000+ sq ft</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Floor</label>
                <select className="w-full rounded-xl border border-border/50 bg-background px-3 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>Any Floor</option>
                  <option>Ground</option>
                  <option>First</option>
                  <option>Second+</option>
                  <option>Basement</option>
                </select>
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
