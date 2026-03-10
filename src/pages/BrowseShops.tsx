import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Maximize, BadgeCheck, Crown, SlidersHorizontal, Heart, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allShops = [
  { id: 1, title: "Prime Corner Shop in Navrangpura", location: "Ahmedabad, Gujarat", price: 25000, size: 450, type: "Corner Shop", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=350&fit=crop", verified: true, premium: true, parking: true, city: "Ahmedabad" },
  { id: 2, title: "Mall Shop Space in Phoenix Mall", location: "Mumbai, Maharashtra", price: 85000, size: 800, type: "Mall Shop", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=500&h=350&fit=crop", verified: true, premium: false, parking: true, city: "Mumbai" },
  { id: 3, title: "Market Shop on MG Road", location: "Bangalore, Karnataka", price: 35000, size: 350, type: "Market Shop", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&h=350&fit=crop", verified: true, premium: false, parking: false, city: "Bangalore" },
  { id: 4, title: "Spacious Ground Floor Shop", location: "Surat, Gujarat", price: 18000, size: 600, type: "Corner Shop", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=350&fit=crop", verified: true, premium: true, parking: true, city: "Surat" },
  { id: 5, title: "High Street Retail Space", location: "Delhi, NCR", price: 55000, size: 500, type: "Market Shop", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&h=350&fit=crop", verified: false, premium: false, parking: false, city: "Delhi" },
  { id: 6, title: "Commercial Shop in VR Mall", location: "Surat, Gujarat", price: 42000, size: 380, type: "Mall Shop", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=350&fit=crop", verified: true, premium: false, parking: true, city: "Surat" },
  { id: 7, title: "Roadside Retail Shop", location: "Ahmedabad, Gujarat", price: 15000, size: 250, type: "Corner Shop", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&h=350&fit=crop", verified: true, premium: false, parking: false, city: "Ahmedabad" },
  { id: 8, title: "Premium Showroom Space", location: "Mumbai, Maharashtra", price: 120000, size: 1200, type: "Showroom", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&h=350&fit=crop", verified: true, premium: true, parking: true, city: "Mumbai" },
  { id: 9, title: "Bazaar Shop Near Station", location: "Delhi, NCR", price: 22000, size: 300, type: "Market Shop", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=350&fit=crop", verified: true, premium: false, parking: false, city: "Delhi" },
];

const BrowseShops = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [savedShops, setSavedShops] = useState<number[]>([]);

  const filtered = allShops.filter((s) => {
    if (searchQuery && !s.title.toLowerCase().includes(searchQuery.toLowerCase()) && !s.location.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (cityFilter && s.city !== cityFilter) return false;
    if (typeFilter && s.type !== typeFilter) return false;
    return true;
  });

  const toggleSave = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedShops(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Browse Shops</h1>
            <p className="text-muted-foreground text-lg">Find the perfect commercial space across India.</p>
          </motion.div>

          {/* Search bar - Airbnb style */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="bg-card rounded-2xl shadow-card p-5 mb-8 border border-border/20">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="flex-1 flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/40 border border-border/40 focus-within:border-primary/30 focus-within:bg-muted/60 transition-all">
                  <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, location..."
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/50 outline-none text-[15px]"
                  />
                </div>
                <div className="flex gap-3">
                  <select
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    className="input-premium min-w-[150px] py-3"
                  >
                    <option value="">All Cities</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Surat">Surat</option>
                  </select>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="input-premium min-w-[150px] py-3"
                  >
                    <option value="">All Types</option>
                    <option value="Corner Shop">Corner Shop</option>
                    <option value="Mall Shop">Mall Shop</option>
                    <option value="Market Shop">Market Shop</option>
                    <option value="Showroom">Showroom</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results header */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground font-medium">
              <span className="stat-number text-foreground text-base">{filtered.length}</span> shops found
            </p>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
              <ArrowUpDown className="w-3.5 h-3.5" /> Sort
            </Button>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((shop, i) => (
              <motion.div
                key={shop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/shop/${shop.id}`}
                  className="block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 group hover:-translate-y-1.5 border border-border/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={shop.image}
                      alt={shop.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {shop.verified && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                          <BadgeCheck className="w-3 h-3" /> Verified
                        </span>
                      )}
                      {shop.premium && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full gradient-gold text-foreground text-xs font-semibold backdrop-blur-sm">
                          <Crown className="w-3 h-3" /> Premium
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => toggleSave(shop.id, e)}
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-200 ${
                        savedShops.includes(shop.id)
                          ? "bg-destructive/20 text-destructive"
                          : "bg-card/80 text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-card hover:scale-110"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${savedShops.includes(shop.id) ? "fill-current" : ""}`} />
                    </button>
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-card/90 text-foreground text-xs font-medium backdrop-blur-sm">
                      {shop.type}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors truncate text-[15px]">
                      {shop.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-2">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />{shop.location}
                    </p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/40">
                      <div>
                        <span className="stat-number text-xl text-foreground">₹{shop.price.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground">/month</span>
                      </div>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Maximize className="w-3.5 h-3.5" />{shop.size} sq ft
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BrowseShops;
