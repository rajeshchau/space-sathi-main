import { motion } from "framer-motion";
import { Search, MapPin, Maximize, BadgeCheck, Crown, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const saved = [
  { id: 1, title: "Prime Corner Shop in Navrangpura", location: "Ahmedabad, Gujarat", price: "₹25,000", size: "450 sq ft", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop", verified: true, premium: true },
  { id: 2, title: "Mall Shop Space in Phoenix Mall", location: "Mumbai, Maharashtra", price: "₹85,000", size: "800 sq ft", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=400&h=250&fit=crop", verified: true, premium: false },
  { id: 3, title: "Market Shop on MG Road", location: "Bangalore, Karnataka", price: "₹35,000", size: "350 sq ft", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=250&fit=crop", verified: true, premium: false },
];

const recommended = [
  { id: 4, title: "Spacious Ground Floor Shop", location: "Surat, Gujarat", price: "₹18,000", size: "600 sq ft", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop", verified: true, reason: "Based on your searches in Gujarat" },
  { id: 5, title: "High Street Retail Space", location: "Delhi, NCR", price: "₹55,000", size: "500 sq ft", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=250&fit=crop", verified: true, reason: "Popular in your budget range" },
];

const RenterSaved = () => (
  <div className="space-y-10">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Saved Shops</h2>
      <p className="text-muted-foreground">{saved.length} shops saved</p>
    </motion.div>

    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {saved.map((shop, i) => (
        <motion.div key={shop.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
          <Link to={`/shop/${shop.id}`} className="block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 group hover:-translate-y-1 border border-border/20">
            <div className="relative overflow-hidden">
              <img src={shop.image} alt={shop.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute top-3 left-3 flex gap-1.5">
                {shop.verified && <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-primary/90 text-primary-foreground text-xs"><BadgeCheck className="w-3 h-3" /> Verified</span>}
                {shop.premium && <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full gradient-gold text-foreground text-xs font-semibold"><Crown className="w-3 h-3" /> Premium</span>}
              </div>
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                <Heart className="w-4 h-4 text-destructive fill-destructive" />
              </button>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors truncate">{shop.title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1.5"><MapPin className="w-3.5 h-3.5" />{shop.location}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/40">
                <span className="stat-number text-lg text-foreground">{shop.price}<span className="text-xs font-normal text-muted-foreground">/mo</span></span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Maximize className="w-3.5 h-3.5" />{shop.size}</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>

    {/* Recommended */}
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h2 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-secondary" /> Recommended for You
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {recommended.map((shop) => (
          <Link to={`/shop/${shop.id}`} key={shop.id} className="flex gap-4 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group border border-border/20 p-4">
            <img src={shop.image} alt={shop.title} className="w-28 h-24 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div className="flex-1 min-w-0">
              <h4 className="font-heading font-semibold text-sm text-foreground truncate group-hover:text-primary transition-colors">{shop.title}</h4>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" />{shop.location}</p>
              <p className="stat-number text-foreground mt-2">{shop.price}<span className="text-xs font-normal text-muted-foreground">/mo</span></p>
              <p className="text-xs text-primary mt-1.5 flex items-center gap-1"><Sparkles className="w-3 h-3" /> {shop.reason}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  </div>
);

export default RenterSaved;
