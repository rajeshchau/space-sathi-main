import { motion } from "framer-motion";
import { CalendarCheck, MapPin, Clock, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const visits = [
  { id: 1, shop: "Prime Corner Shop in Navrangpura", location: "Ahmedabad", date: "Mar 12, 2026", time: "10:00 AM", status: "confirmed", owner: "Rajesh Patel" },
  { id: 2, shop: "Mall Shop Space in Phoenix Mall", location: "Mumbai", date: "Mar 15, 2026", time: "2:30 PM", status: "pending", owner: "Amit Shah" },
  { id: 3, shop: "Market Shop on MG Road", location: "Bangalore", date: "Mar 8, 2026", time: "11:00 AM", status: "completed", owner: "Deepak Verma" },
];

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle2; label: string }> = {
  confirmed: { color: "bg-primary/10 text-primary", icon: CheckCircle2, label: "Confirmed" },
  pending: { color: "bg-secondary/10 text-secondary", icon: Clock, label: "Pending" },
  completed: { color: "bg-muted text-muted-foreground", icon: CheckCircle2, label: "Completed" },
  cancelled: { color: "bg-destructive/10 text-destructive", icon: XCircle, label: "Cancelled" },
};

const RenterVisits = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-heading font-bold text-foreground">Visit Requests</h2>
      <p className="text-sm text-muted-foreground">Manage your scheduled shop visits.</p>
    </div>

    <div className="space-y-4">
      {visits.map((visit, i) => {
        const status = statusConfig[visit.status];
        const StatusIcon = status.icon;
        return (
          <motion.div key={visit.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <CalendarCheck className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{visit.shop}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" />{visit.location}</p>
                  <p className="text-sm text-muted-foreground mt-1">Owner: {visit.owner}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm font-medium text-foreground">{visit.date}</span>
                    <span className="text-sm text-muted-foreground">{visit.time}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${status.color}`}>
                  <StatusIcon className="w-3 h-3" /> {status.label}
                </span>
                {visit.status === "pending" && <Button variant="ghost" size="sm" className="text-destructive">Cancel</Button>}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default RenterVisits;
