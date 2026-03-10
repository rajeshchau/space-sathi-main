import { motion } from "framer-motion";
import { Building2, Search, ArrowRight, Store } from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    type: "owner",
    icon: Building2,
    title: "Shop Owner",
    description: "I want to list my commercial shop and find renters directly.",
    features: ["List unlimited shops", "Get qualified leads", "Track analytics", "AI pricing tools"],
    cta: "Start Listing",
    link: "/dashboard",
    gradient: "gradient-primary",
    badge: "bg-primary/10 text-primary",
  },
  {
    type: "renter",
    icon: Search,
    title: "Shop Renter",
    description: "I'm looking for the perfect commercial space for my business.",
    features: ["Browse verified shops", "Contact owners directly", "Schedule visits", "Save favorites"],
    cta: "Find Shops",
    link: "/renter",
    gradient: "gradient-saffron",
    badge: "bg-secondary/10 text-secondary",
  },
];

const RoleSelection = () => (
  <div className="min-h-screen bg-background flex items-center justify-center p-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-3xl"
    >
      <div className="text-center mb-12">
        <Link to="/" className="inline-flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
            <Store className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-2xl text-foreground tracking-tight">
            Shop<span className="text-gradient-primary">Lease</span>
          </span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          How will you use ShopLease?
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Choose your role to get a personalized experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {roles.map((role, i) => (
          <motion.div
            key={role.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          >
            <Link
              to={role.link}
              className="block bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 border-2 border-border/30 hover:border-primary/30 group hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${role.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <role.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h2 className="text-xl font-heading font-bold text-foreground mb-2">
                {role.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {role.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {role.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                {role.cta} <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-8">
        You can always switch roles later from your profile settings.
      </p>
    </motion.div>
  </div>
);

export default RoleSelection;
