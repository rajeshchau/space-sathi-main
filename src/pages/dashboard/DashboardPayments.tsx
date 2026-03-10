import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    features: ["3 listings", "Basic analytics", "Standard visibility", "Email support"],
    current: true,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    features: ["Unlimited listings", "Advanced analytics", "Priority visibility", "Verified badge", "Premium support", "AI insights"],
    current: false,
    popular: true,
  },
];

const transactions = [
  { id: 1, desc: "Featured Listing — Corner Shop, Navrangpura", amount: "₹499", date: "Mar 5, 2026", status: "completed" },
  { id: 2, desc: "Verified Badge — Mall Shop, Phoenix Mall", amount: "₹299", date: "Feb 20, 2026", status: "completed" },
  { id: 3, desc: "Featured Listing — Market Shop, MG Road", amount: "₹499", date: "Feb 10, 2026", status: "completed" },
];

const DashboardPayments = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-heading font-bold text-foreground">Payments & Plans</h2>
      <p className="text-sm text-muted-foreground">Manage your subscription and view transaction history.</p>
    </div>

    {/* Plans */}
    <div className="grid md:grid-cols-2 gap-4">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`bg-card rounded-2xl p-6 shadow-card relative overflow-hidden ${
            plan.popular ? "ring-2 ring-primary" : ""
          }`}
        >
          {plan.popular && (
            <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
              <Star className="w-3 h-3" /> Popular
            </span>
          )}
          <div className="flex items-center gap-2 mb-2">
            <Crown className={`w-5 h-5 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
            <h3 className="font-heading font-semibold text-foreground">{plan.name}</h3>
          </div>
          <div className="mb-4">
            <span className="font-mono text-3xl font-bold text-foreground">{plan.price}</span>
            <span className="text-sm text-muted-foreground">{plan.period}</span>
          </div>
          <ul className="space-y-2 mb-6">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <Button
            variant={plan.current ? "outline" : "cta"}
            className="w-full"
            disabled={plan.current}
          >
            {plan.current ? "Current Plan" : "Upgrade to Pro"}
          </Button>
        </motion.div>
      ))}
    </div>

    {/* Transaction history */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card rounded-2xl p-6 shadow-card"
    >
      <h3 className="font-heading font-semibold text-foreground mb-4">Transaction History</h3>
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
            <div>
              <p className="text-sm font-medium text-foreground">{tx.desc}</p>
              <p className="text-xs text-muted-foreground">{tx.date}</p>
            </div>
            <div className="text-right">
              <p className="font-mono font-semibold text-foreground">{tx.amount}</p>
              <span className="text-xs text-primary capitalize">{tx.status}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default DashboardPayments;
