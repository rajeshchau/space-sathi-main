import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, IndianRupee, MapPin, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AITools = () => {
  const [rentCity, setRentCity] = useState("Ahmedabad");
  const [rentSize, setRentSize] = useState("500");
  const [rentResult, setRentResult] = useState("");
  const [descInput, setDescInput] = useState("");
  const [descResult, setDescResult] = useState("");
  const [locArea, setLocArea] = useState("Navrangpura, Ahmedabad");
  const [locResult, setLocResult] = useState("");
  const [loading, setLoading] = useState<string | null>(null);

  const simulate = (key: string, result: string) => {
    setLoading(key);
    setTimeout(() => {
      if (key === "rent") setRentResult(result);
      else if (key === "desc") setDescResult(result);
      else if (key === "loc") setLocResult(result);
      setLoading(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" /> Powered by AI
            </span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">AI Tools for Shop Owners</h1>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">Smart tools to help you price, describe, and optimize your listings.</p>
          </motion.div>

          <div className="space-y-8">
            {/* Rent suggestion */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center"><IndianRupee className="w-5 h-5 text-primary-foreground" /></div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">AI Rent Price Suggestion</h3>
                  <p className="text-sm text-muted-foreground">Get a fair rent estimate for your shop.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">City</label>
                  <select value={rentCity} onChange={(e) => setRentCity(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground">
                    <option>Ahmedabad</option><option>Mumbai</option><option>Delhi</option><option>Bangalore</option><option>Surat</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Shop Size (sq ft)</label>
                  <input type="text" value={rentSize} onChange={(e) => setRentSize(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground" />
                </div>
              </div>
              <Button variant="cta" className="gap-2" disabled={loading === "rent"} onClick={() => simulate("rent", `Based on market data for ${rentCity}, a ${rentSize} sq ft shop is typically rented for ₹${Math.round(Number(rentSize) * (rentCity === "Mumbai" ? 120 : 45))}/month. Premium locations can command up to 30% higher.`)}>
                {loading === "rent" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />} Get Price Suggestion
              </Button>
              {rentResult && <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10"><p className="text-sm text-foreground">{rentResult}</p></div>}
            </motion.div>

            {/* Description generator */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-saffron flex items-center justify-center"><FileText className="w-5 h-5 text-primary-foreground" /></div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">AI Shop Description Generator</h3>
                  <p className="text-sm text-muted-foreground">Enter basic details, AI writes a professional description.</p>
                </div>
              </div>
              <textarea value={descInput} onChange={(e) => setDescInput(e.target.value)} placeholder="E.g. Corner shop, 500 sq ft, ground floor, Navrangpura Ahmedabad, parking available, main road" rows={3}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 mb-3 resize-none" />
              <Button variant="saffron" className="gap-2" disabled={loading === "desc"} onClick={() => simulate("desc", "Discover this premium corner shop located on the bustling main road of Navrangpura, Ahmedabad. Spanning 500 sq ft on the ground floor, this well-maintained commercial space offers excellent visibility and high footfall. With dedicated parking and a wide frontage, this shop is ideal for retail, pharmacy, or food business. The location provides easy access to major arterial roads and public transport. Don't miss this opportunity to establish your business in one of Ahmedabad's most sought-after commercial areas.")}>
                {loading === "desc" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />} Generate Description
              </Button>
              {descResult && <div className="mt-4 p-4 rounded-xl bg-secondary/5 border border-secondary/10"><p className="text-sm text-foreground leading-relaxed">{descResult}</p></div>}
            </motion.div>

            {/* Location insights */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center"><MapPin className="w-5 h-5 text-primary-foreground" /></div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">AI Location Business Insights</h3>
                  <p className="text-sm text-muted-foreground">Discover the best business types for any location.</p>
                </div>
              </div>
              <input type="text" value={locArea} onChange={(e) => setLocArea(e.target.value)} placeholder="Enter area, e.g. MG Road, Bangalore" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 mb-3" />
              <Button variant="cta" className="gap-2" disabled={loading === "loc"} onClick={() => simulate("loc", `📍 ${locArea}\n\n🏆 Best businesses for this area:\n• Pharmacy (87% success rate)\n• Grocery Store (82% success rate)\n• Cafe/Restaurant (78% success rate)\n• Clothing Retail (71% success rate)\n\n📊 Area Insights:\n• High residential density\n• Average footfall: 2,000+ daily\n• Nearest competitor: 500m away\n• Growing market demand`)}>
                {loading === "loc" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />} Analyze Location
              </Button>
              {locResult && <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/10"><pre className="text-sm text-foreground whitespace-pre-wrap font-body">{locResult}</pre></div>}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AITools;
