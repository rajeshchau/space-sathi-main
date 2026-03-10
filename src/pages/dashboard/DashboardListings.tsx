import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, Eye, MessageSquare, MoreVertical, Pencil, Trash2, Crown, BadgeCheck, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const listings = [
  {
    id: 1, title: "Prime Corner Shop in Navrangpura", location: "Ahmedabad, Gujarat",
    rent: "₹25,000", size: "450 sq ft", views: 842, inquiries: 12,
    status: "active", verified: true, premium: true,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
  },
  {
    id: 2, title: "Mall Shop Space in Phoenix Mall", location: "Mumbai, Maharashtra",
    rent: "₹85,000", size: "800 sq ft", views: 654, inquiries: 8,
    status: "active", verified: true, premium: false,
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=300&h=200&fit=crop",
  },
  {
    id: 3, title: "Market Shop on MG Road", location: "Bangalore, Karnataka",
    rent: "₹35,000", size: "350 sq ft", views: 421, inquiries: 6,
    status: "active", verified: true, premium: false,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=300&h=200&fit=crop",
  },
  {
    id: 4, title: "Spacious Ground Floor Shop", location: "Surat, Gujarat",
    rent: "₹18,000", size: "600 sq ft", views: 289, inquiries: 4,
    status: "draft", verified: false, premium: false,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop",
  },
  {
    id: 5, title: "High Street Retail Space", location: "Delhi, NCR",
    rent: "₹55,000", size: "500 sq ft", views: 156, inquiries: 2,
    status: "paused", verified: false, premium: false,
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=300&h=200&fit=crop",
  },
];

const statusColors: Record<string, string> = {
  active: "bg-primary/10 text-primary",
  draft: "bg-muted text-muted-foreground",
  paused: "bg-secondary/10 text-secondary",
};

const DashboardListings = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-heading font-bold text-foreground">My Listings</h2>
          <p className="text-sm text-muted-foreground">{listings.length} total listings</p>
        </div>
        <Link to="/create-listing">
          <Button variant="cta" className="gap-2">
            <Plus className="w-4 h-4" /> Add New Shop
          </Button>
        </Link>
      </div>

      {/* Listing cards */}
      <div className="space-y-4">
        {listings.map((listing, i) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-48 h-36 sm:h-auto flex-shrink-0 relative">
                <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  {listing.verified && (
                    <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-primary/90 text-primary-foreground text-xs backdrop-blur-sm">
                      <BadgeCheck className="w-3 h-3" />
                    </span>
                  )}
                  {listing.premium && (
                    <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-accent/90 text-accent-foreground text-xs backdrop-blur-sm">
                      <Crown className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-heading font-semibold text-foreground truncate">{listing.title}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {listing.location}
                      </p>
                    </div>
                    <div className="relative flex-shrink-0">
                      <button
                        onClick={() => setOpenMenu(openMenu === listing.id ? null : listing.id)}
                        className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center transition-colors"
                      >
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                      </button>
                      {openMenu === listing.id && (
                        <div className="absolute right-0 top-10 bg-card rounded-xl shadow-card-hover border border-border py-1 z-10 min-w-[140px]">
                          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors" onClick={() => setOpenMenu(null)}>
                            <Pencil className="w-3.5 h-3.5" /> Edit
                          </button>
                          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-destructive/5 transition-colors" onClick={() => setOpenMenu(null)}>
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <div className="flex items-center gap-4">
                    <span className="font-mono font-bold text-foreground">{listing.rent}<span className="text-xs font-normal text-muted-foreground">/mo</span></span>
                    <span className="text-sm text-muted-foreground">{listing.size}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Eye className="w-3 h-3" /> {listing.views}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {listing.inquiries}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[listing.status]}`}>
                      {listing.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardListings;
