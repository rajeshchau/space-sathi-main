import { motion } from "framer-motion";
import { Users, BanknoteIcon, Search, ShieldCheck, MessageCircle, TrendingUp } from "lucide-react";

const features = [
  { icon: Users, title: "Direct Owner Connection", desc: "Connect with property owners directly without middlemen." },
  { icon: BanknoteIcon, title: "No Brokerage Fees", desc: "List or rent shops without paying brokerage." },
  { icon: Search, title: "Smart Search", desc: "Find shops faster with intelligent filters designed for business needs." },
  { icon: ShieldCheck, title: "Verified Listings", desc: "Every listing is reviewed to ensure accurate and genuine properties." },
  { icon: MessageCircle, title: "Secure Messaging", desc: "Chat with owners or renters directly with instant notifications." },
  { icon: TrendingUp, title: "Local Market Insights", desc: "Access rental price data and trends to make better decisions." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <span className="section-badge bg-secondary/10 text-secondary mb-5">Platform Benefits</span>
        <h2 className="text-3xl md:text-[2.75rem] font-heading font-semibold text-foreground leading-tight">
          Why Choose ShopLease
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg leading-relaxed">
          Everything you need to find the right commercial space or rent out your shop with confidence.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-500 group border border-border/20 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground text-[17px]">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
