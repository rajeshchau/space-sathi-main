import { motion } from "framer-motion";
import { Building2, Eye, MessageSquare, IndianRupee, TrendingUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Listings", value: "5", change: "+1 this month", icon: Building2, color: "gradient-primary" },
  { label: "Total Views", value: "2,847", change: "+18% vs last month", icon: Eye, color: "gradient-saffron" },
  { label: "Inquiries", value: "34", change: "+7 this week", icon: MessageSquare, color: "gradient-primary" },
  { label: "Revenue", value: "₹4,490", change: "From premium listings", icon: IndianRupee, color: "gradient-gold" },
];

const topListings = [
  { title: "Prime Corner Shop in Navrangpura", views: 842, inquiries: 12, status: "Active" },
  { title: "Mall Shop Space in Phoenix Mall", views: 654, inquiries: 8, status: "Active" },
  { title: "Spacious Ground Floor Shop", views: 421, inquiries: 6, status: "Active" },
];

const recentInquiries = [
  { name: "Priya Sharma", shop: "Corner Shop, Navr...", time: "2 hours ago", initials: "PS" },
  { name: "Amit Kumar", shop: "Mall Shop, Phoeni...", time: "5 hours ago", initials: "AK" },
  { name: "Neha Gupta", shop: "Corner Shop, Navran...", time: "1 day ago", initials: "NG" },
  { name: "Rahul Joshi", shop: "Market Shop, MG R...", time: "2 days ago", initials: "RJ" },
];

const DashboardOverview = () => (
  <div className="space-y-8">
    {/* Stats */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card rounded-2xl p-6 shadow-card border border-border/20 hover:shadow-card-hover transition-all duration-300 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <TrendingUp className="w-4 h-4 text-primary/40" />
          </div>
          <p className="stat-number text-3xl text-foreground mb-1">{stat.value}</p>
          <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
          <p className="text-xs text-primary mt-1 font-medium">{stat.change}</p>
        </motion.div>
      ))}
    </div>

    <div className="grid lg:grid-cols-5 gap-6">
      {/* Top listings */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="lg:col-span-3 bg-card rounded-2xl p-6 shadow-card border border-border/20"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading font-bold text-foreground text-lg">Top Performing Listings</h3>
          <Link to="/dashboard/listings" className="text-sm text-primary font-semibold flex items-center gap-1 hover:underline">
            View All <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="space-y-4">
          {topListings.map((listing) => (
            <div key={listing.title} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/20 hover:bg-muted/50 transition-colors">
              <div>
                <p className="font-medium text-foreground text-sm">{listing.title}</p>
                <div className="flex items-center gap-4 mt-1.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {listing.views} views</span>
                  <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {listing.inquiries} inquiries</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{listing.status}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent inquiries */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-card border border-border/20"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading font-bold text-foreground text-lg">Recent Inquiries</h3>
          <Link to="/dashboard/messages" className="text-sm text-primary font-semibold flex items-center gap-1 hover:underline">
            All <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="space-y-4">
          {recentInquiries.map((inq) => (
            <div key={inq.name} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-xs font-bold text-primary-foreground">{inq.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground truncate">{inq.name}</p>
                <p className="text-xs text-muted-foreground truncate">{inq.shop}</p>
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0">{inq.time}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default DashboardOverview;
