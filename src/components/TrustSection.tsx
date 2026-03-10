import { motion } from "framer-motion";
import { Building2, Users, ShieldCheck, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2, value: "10,000+", label: "Shops Listed", color: "gradient-primary" },
  { icon: Users, value: "5,000+", label: "Businesses Connected", color: "gradient-saffron" },
  { icon: ShieldCheck, value: "100%", label: "Verified Owners", color: "gradient-primary" },
  { icon: TrendingUp, value: "99.5%", label: "Platform Uptime", color: "gradient-gold" },
];

const TrustSection = () => (
  <section className="py-20 border-y border-border/30">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
              <stat.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <p className="stat-number text-3xl md:text-4xl text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
