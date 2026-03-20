import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Maximize, Heart, Share2, Phone, CalendarCheck, BadgeCheck, Crown, ChevronLeft, ChevronRight, Car, Droplets, Zap, Bath, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const shopData: Record<string, any> = {
  "1": {
    title: "Prime Corner Shop in Navrangpura", location: "Navrangpura, Ahmedabad, Gujarat", price: "₹25,000", deposit: "₹50,000", size: "450 sq ft", floor: "Ground Floor", type: "Corner Shop",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=500&fit=crop",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=900&h=500&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&h=500&fit=crop",
    ],
    description: "A premium corner shop located on the main road of Navrangpura, one of Ahmedabad's busiest commercial areas. Excellent visibility with high footfall. Perfect for retail, pharmacy, grocery, or food business. The shop features a wide frontage, ample natural light, and a modern interior layout.",
    amenities: ["Parking", "Washroom", "Main Road Facing", "Electricity (3-phase)", "Water Supply", "CCTV", "Rolling Shutter", "Display Window"],
    suitableFor: ["Grocery", "Pharmacy", "Restaurant", "Clothing", "Cafe"],
    owner: { name: "Rajesh Patel", phone: "+91 98765 43210", avatar: "RP", listings: 5, responseTime: "Usually responds within 2 hours" },
    verified: true, premium: true, views: 842,
  },
};

const defaultShop = {
  title: "Commercial Shop Space", location: "India", price: "₹20,000", deposit: "₹40,000", size: "400 sq ft", floor: "Ground Floor", type: "Shop",
  images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=500&fit=crop", "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=900&h=500&fit=crop"],
  description: "A well-located commercial shop space available for rent.", amenities: ["Parking", "Electricity", "Water Supply"],
  suitableFor: ["Retail", "Office"], owner: { name: "Shop Owner", phone: "+91 98765 43210", avatar: "SO", listings: 1, responseTime: "Responds within a day" },
  verified: true, premium: false, views: 100,
};

const similarShops = [
  { id: 4, title: "Spacious Ground Floor Shop", location: "Surat, Gujarat", price: "₹18,000", size: "600 sq ft", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop" },
  { id: 7, title: "Roadside Retail Shop", location: "Ahmedabad, Gujarat", price: "₹15,000", size: "250 sq ft", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=250&fit=crop" },
  { id: 9, title: "Bazaar Shop Near Station", location: "Delhi, NCR", price: "₹22,000", size: "300 sq ft", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop" },
];

const amenityIcons: Record<string, typeof Car> = { Parking: Car, "Water Supply": Droplets, "Electricity (3-phase)": Zap, Electricity: Zap, Washroom: Bath };

const ShopDetail = () => {
  const { id } = useParams();
  const shop = shopData[id || ""] || defaultShop;
  const [currentImg, setCurrentImg] = useState(0);
  const [saved, setSaved] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container max-w-5xl">
          {/* Back to Browse */}
          <Link to="/browse" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" /> Back to all shops
          </Link>
          {/* Image gallery */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative rounded-2xl overflow-hidden mb-8">
            <img src={shop.images[currentImg]} alt={shop.title} className="w-full h-72 sm:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            {shop.images.length > 1 && (
              <>
                <button onClick={() => setCurrentImg((p) => (p === 0 ? shop.images.length - 1 : p - 1))} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                <button onClick={() => setCurrentImg((p) => (p === shop.images.length - 1 ? 0 : p + 1))} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"><ChevronRight className="w-5 h-5" /></button>
              </>
            )}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {shop.verified && <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm backdrop-blur-sm"><BadgeCheck className="w-4 h-4" /> Verified</span>}
              {shop.premium && <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-sm backdrop-blur-sm"><Crown className="w-4 h-4" /> Premium</span>}
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-sm text-foreground flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {shop.views} views</span>
              <span className="px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-sm text-foreground">{currentImg + 1}/{shop.images.length}</span>
            </div>
            {/* Thumbnails */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {shop.images.map((_: string, i: number) => (
                <button key={i} onClick={() => setCurrentImg(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentImg ? "bg-card w-6" : "bg-card/50"}`} />
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-heading font-bold text-foreground">{shop.title}</h1>
                    <p className="text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="w-4 h-4" />{shop.location}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setSaved(!saved)} className={`w-10 h-10 rounded-xl border border-border flex items-center justify-center transition-all ${saved ? "bg-destructive/10 border-destructive" : "hover:bg-muted"}`}>
                      <Heart className={`w-5 h-5 ${saved ? "text-destructive fill-destructive" : "text-muted-foreground"}`} />
                    </button>
                    <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-all">
                      <Share2 className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Key details */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Monthly Rent", value: shop.price },
                  { label: "Security Deposit", value: shop.deposit },
                  { label: "Area", value: shop.size },
                  { label: "Floor", value: shop.floor },
                ].map((d) => (
                  <div key={d.label} className="bg-card rounded-xl p-4 shadow-card text-center">
                    <p className="text-xs text-muted-foreground">{d.label}</p>
                    <p className="font-mono font-bold text-foreground mt-1">{d.value}</p>
                  </div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="font-heading font-semibold text-foreground mb-3">About this Shop</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{shop.description}</p>
              </motion.div>

              {/* Amenities */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="font-heading font-semibold text-foreground mb-3">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {shop.amenities.map((a: string) => {
                    const Icon = amenityIcons[a] || Maximize;
                    return (
                      <div key={a} className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/50">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">{a}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Suitable for */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="font-heading font-semibold text-foreground mb-3">Suitable For</h3>
                <div className="flex flex-wrap gap-2">
                  {shop.suitableFor.map((s: string) => (
                    <span key={s} className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">{s}</span>
                  ))}
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="font-heading font-semibold text-foreground mb-3">Location</h3>
                <div className="rounded-xl bg-muted/50 h-48 flex items-center justify-center border border-border">
                  <div className="text-center">
                    <span className="text-3xl">📍</span>
                    <p className="text-sm text-muted-foreground mt-2">{shop.location}</p>
                    <p className="text-xs text-muted-foreground">Map integration coming soon</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Owner card */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card rounded-2xl p-6 shadow-card sticky top-20">
                <h3 className="font-heading font-semibold text-foreground mb-4">Contact Owner</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">{shop.owner.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{shop.owner.name}</p>
                    <p className="text-xs text-muted-foreground">{shop.owner.listings} listings • {shop.owner.responseTime}</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <Button variant="cta" className="w-full gap-2"><Phone className="w-4 h-4" /> Contact Owner</Button>
                  <Button variant="hero-outline" className="w-full gap-2"><CalendarCheck className="w-4 h-4" /> Schedule Visit</Button>
                  <Button variant="outline" className="w-full gap-2 text-primary border-primary/20">💬 WhatsApp</Button>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-xs text-muted-foreground text-center">🔒 Your contact details are protected</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Similar shops */}
          <div className="mt-12">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">Similar Shops Nearby</h3>
            <div className="grid sm:grid-cols-3 gap-5">
              {similarShops.map((s) => (
                <Link to={`/shop/${s.id}`} key={s.id} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
                  <img src={s.image} alt={s.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-4">
                    <h4 className="font-heading font-semibold text-sm text-foreground truncate">{s.title}</h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" />{s.location}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <span className="font-mono font-bold text-foreground">{s.price}<span className="text-xs font-normal text-muted-foreground">/mo</span></span>
                      <span className="text-xs text-muted-foreground">{s.size}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopDetail;
