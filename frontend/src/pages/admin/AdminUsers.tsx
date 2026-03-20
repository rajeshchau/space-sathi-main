import { motion } from "framer-motion";
import { Search, MoreVertical, Shield, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";

const users = [
  { id: 1, name: "Rajesh Patel", email: "rajesh@example.com", type: "Owner", listings: 5, joined: "Jan 2026", status: "active" },
  { id: 2, name: "Priya Sharma", email: "priya@example.com", type: "Renter", listings: 0, joined: "Feb 2026", status: "active" },
  { id: 3, name: "Amit Kumar", email: "amit@example.com", type: "Owner", listings: 3, joined: "Jan 2026", status: "active" },
  { id: 4, name: "Neha Gupta", email: "neha@example.com", type: "Renter", listings: 0, joined: "Mar 2026", status: "active" },
  { id: 5, name: "Deepak Verma", email: "deepak@example.com", type: "Owner", listings: 2, joined: "Dec 2025", status: "suspended" },
  { id: 6, name: "Rahul Joshi", email: "rahul@example.com", type: "Renter", listings: 0, joined: "Feb 2026", status: "active" },
];

const AdminUsers = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-heading font-bold text-foreground">Manage Users</h2>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input type="text" placeholder="Search users..." className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-40" />
      </div>
    </div>

    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl shadow-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">User</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Type</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Listings</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Joined</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Status</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">{user.name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${user.type === "Owner" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>{user.type}</span></td>
                <td className="px-5 py-3 text-sm text-foreground">{user.listings}</td>
                <td className="px-5 py-3 text-sm text-muted-foreground">{user.joined}</td>
                <td className="px-5 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${user.status === "active" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>{user.status}</span></td>
                <td className="px-5 py-3">
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="h-7 px-2"><Shield className="w-3.5 h-3.5" /></Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2 text-destructive"><Ban className="w-3.5 h-3.5" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  </div>
);

export default AdminUsers;
