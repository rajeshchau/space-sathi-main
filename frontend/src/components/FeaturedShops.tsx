import { motion } from "framer-motion";
import { MapPin, Maximize, BadgeCheck, Crown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const shops = [
  {
    id: 1,
    title: "Prime Corner Shop in Navrangpura",
    location: "Ahmedabad, Gujarat",
    price: "₹25,000",
    size: "450 sq ft",
    type: "Corner Shop",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    verified: true,
    premium: true,
  },
  {
    id: 2,
    title: "Mall Shop Space in Phoenix Mall",
    location: "Mumbai, Maharashtra",
    price: "₹85,000",
    size: "800 sq ft",
    type: "Mall Shop",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop",
    verified: true,
    premium: false,
  },
  {
    id: 3,
    title: "Market Shop on MG Road",
    location: "Bangalore, Karnataka",
    price: "₹35,000",
    size: "350 sq ft",
    type: "Market Shop",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop",
    verified: true,
    premium: false,
  },
  {
    id: 4,
    title: "Spacious Ground Floor Shop",
    location: "Surat, Gujarat",
    price: "₹18,000",
    size: "600 sq ft",
    type: "Corner Shop",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    verified: true,
    premium: true,
  },
  {
    id: 5,
    title: "High Street Retail Space",
    location: "Delhi, NCR",
    price: "₹55,000",
    size: "500 sq ft",
    type: "Market Shop",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop",
    verified: false,
    premium: false,
  },
  {
    id: 6,
    title: "Commercial Shop in VR Mall",
    location: "Surat, Gujarat",
    price: "₹42,000",
    size: "380 sq ft",
    type: "Mall Shop",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    verified: true,
    premium: false,
  },
];

const ShopCard = ({ shop, index }: { shop: typeof shops[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <Link
      to={`/shop/${shop.id}`}
      className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1.5 border border-border/30"
    >
      <div className="relative overflow-hidden">
        <img
          src={shop.image}
          alt={shop.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 flex gap-2">
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
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-card hover:scale-110">
          <Heart className="w-4 h-4 text-muted-foreground" />
        </button>
        <div className="absolute bottom-3 right-3">
          <span className="px-2.5 py-1 rounded-full bg-card/90 text-foreground text-xs font-medium backdrop-blur-sm">
            {shop.type}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {shop.title}
        </h3>
        <div className="flex items-center gap-1.5 mt-2 text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-sm">{shop.location}</span>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
          <div>
            <span className="font-mono font-bold text-lg text-foreground">{shop.price}</span>
            <span className="text-xs text-muted-foreground">/month</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Maximize className="w-3.5 h-3.5" />
            <span className="text-sm">{shop.size}</span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const FeaturedShops = () => (
  <section id="featured" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12"
      >
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">Explore</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Featured Shops
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md">Hand-picked commercial spaces across India's top cities.</p>
        </div>
        <Link to="/browse">
          <Button variant="hero-outline" className="mt-4 md:mt-0">View All Shops</Button>
        </Link>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shops.map((shop, i) => (
          <ShopCard key={shop.id} shop={shop} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedShops;
