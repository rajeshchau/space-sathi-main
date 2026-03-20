import { motion } from "framer-motion";
import { Users, Building2, CreditCard, Flag, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Users", value: "12,450", icon: Users, change: "+320 this month", color: "bg-primary/10 text-primary" },
  { label: "Total Listings", value: "8,920", icon: Building2, change: "+180 this month", color: "bg-secondary/10 text-secondary" },
  { label: "Revenue", value: "₹4.2L", icon: CreditCard, change: "+22% vs last month", color: "bg-accent/10 text-accent-foreground" },
  { label: "Reports", value: "23", icon: Flag, change: "12 pending", color: "bg-destructive/10 text-destructive" },
];

const pendingListings = [
  { id: 1, title: "New Shop in Connaught Place", owner: "Vikram Singh", city: "Delhi", date: "Today" },
  { id: 2, title: "Mall Space in Inorbit", owner: "Priya Mehta", city: "Mumbai", date: "Today" },
  { id: 3, title: "Corner Shop near Station", owner: "Ramesh Kumar", city: "Surat", date: "Yesterday" },
];

const recentReports = [
  { id: 1, type: "Spam listing", listing: "Fake Shop XYZ", reporter: "User #4521", severity: "high" },
  { id: 2, type: "Misleading photos", listing: "Shop in Bangalore", reporter: "User #3890", severity: "medium" },
  { id: 3, type: "Wrong pricing", listing: "Premium Showroom", reporter: "User #5102", severity: "low" },
];

const AdminOverview = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-heading font-bold text-foreground">Admin Overview</h2>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className="bg-card rounded-2xl p-5 shadow-card">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}><stat.icon className="w-5 h-5" /></div>
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <p className="font-mono text-2xl font-bold text-foreground">{stat.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          <p className="text-xs text-primary mt-0.5">{stat.change}</p>
        </motion.div>
      ))}
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      {/* Pending approvals */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-card rounded-2xl p-6 shadow-card">
        <h3 className="font-heading font-semibold text-foreground mb-4">Pending Approvals</h3>
        <div className="space-y-3">
          {pendingListings.map((listing) => (
            <div key={listing.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
              <div>
                <p className="text-sm font-medium text-foreground">{listing.title}</p>
                <p className="text-xs text-muted-foreground">{listing.owner} • {listing.city} • {listing.date}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="cta" size="sm" className="h-7 px-2.5 text-xs gap-1"><CheckCircle2 className="w-3 h-3" /> Approve</Button>
                <Button variant="ghost" size="sm" className="h-7 px-2.5 text-xs text-destructive">Reject</Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent reports */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-card rounded-2xl p-6 shadow-card">
        <h3 className="font-heading font-semibold text-foreground mb-4">Recent Reports</h3>
        <div className="space-y-3">
          {recentReports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
              <div className="flex items-start gap-3">
                <AlertTriangle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${report.severity === "high" ? "text-destructive" : report.severity === "medium" ? "text-secondary" : "text-muted-foreground"}`} />
                <div>
                  <p className="text-sm font-medium text-foreground">{report.type}</p>
                  <p className="text-xs text-muted-foreground">{report.listing} • {report.reporter}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${report.severity === "high" ? "bg-destructive/10 text-destructive" : report.severity === "medium" ? "bg-secondary/10 text-secondary" : "bg-muted text-muted-foreground"}`}>
                {report.severity}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default AdminOverview;
