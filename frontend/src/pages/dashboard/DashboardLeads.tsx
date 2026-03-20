import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, CalendarCheck, Search, Filter, User, Building2, IndianRupee, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const leads = [
  { id: 1, name: "Priya Sharma", phone: "+91 98765 43210", property: "Corner Shop, Navrangpura", budget: "₹20,000 - ₹30,000", message: "I'm looking for a ground floor shop for my clothing business. Is this available?", date: "Mar 7, 2026", time: "2:30 PM", status: "new", avatar: "PS" },
  { id: 2, name: "Amit Kumar", phone: "+91 87654 32109", property: "Mall Shop, Phoenix Mall", budget: "₹70,000 - ₹90,000", message: "Can I schedule a visit this weekend? I'm interested in the mall space.", date: "Mar 6, 2026", time: "5:15 PM", status: "contacted", avatar: "AK" },
  { id: 3, name: "Neha Gupta", phone: "+91 76543 21098", property: "Corner Shop, Navrangpura", budget: "₹25,000 - ₹35,000", message: "What's the lease duration? Is the rent negotiable for long-term?", date: "Mar 5, 2026", time: "11:00 AM", status: "qualified", avatar: "NG" },
  { id: 4, name: "Rahul Joshi", phone: "+91 65432 10987", property: "Market Shop, MG Road", budget: "₹30,000 - ₹40,000", message: "I want to start a pharmacy. Is this location suitable?", date: "Mar 4, 2026", time: "3:45 PM", status: "new", avatar: "RJ" },
  { id: 5, name: "Deepak Verma", phone: "+91 54321 09876", property: "Ground Floor Shop, Surat", budget: "₹15,000 - ₹20,000", message: "Is parking available? How many sq ft is the actual usable area?", date: "Mar 3, 2026", time: "9:30 AM", status: "visited", avatar: "DV" },
];

const statusConfig: Record<string, { color: string; label: string }> = {
  new: { color: "bg-secondary/10 text-secondary", label: "New" },
  contacted: { color: "bg-primary/10 text-primary", label: "Contacted" },
  qualified: { color: "bg-accent/20 text-accent-foreground", label: "Qualified" },
  visited: { color: "bg-muted text-muted-foreground", label: "Visited" },
};

const DashboardLeads = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-heading font-bold text-foreground">Leads & Inquiries</h2>
          <p className="text-sm text-muted-foreground">{leads.length} total inquiries</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/50 border border-border">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Search leads..." className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-36" />
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {[
          { key: "all", label: "All Leads" },
          { key: "new", label: "New" },
          { key: "contacted", label: "Contacted" },
          { key: "qualified", label: "Qualified" },
          { key: "visited", label: "Visited" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              filter === f.key
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 text-muted-foreground hover:bg-muted"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Lead cards */}
      <div className="space-y-4">
        {filtered.map((lead, i) => {
          const status = statusConfig[lead.status];
          return (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all border border-border/20"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-sm font-bold text-primary-foreground">{lead.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-heading font-semibold text-foreground">{lead.name}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
                        {status.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1.5 text-xs text-muted-foreground flex-wrap">
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {lead.property}</span>
                      <span className="flex items-center gap-1"><IndianRupee className="w-3 h-3" /> {lead.budget}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {lead.date} at {lead.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">"{lead.message}"</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0 lg:flex-col lg:items-end">
                  <Button variant="cta" size="sm" className="gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> Call
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" /> Chat
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <CalendarCheck className="w-3.5 h-3.5" /> Schedule
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardLeads;
