import { motion } from "framer-motion";
import { Check, Star, Crown, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Free", price: "₹0", period: "/forever", icon: Zap, popular: false, gradient: "",
    features: ["1 listing", "Basic visibility", "Standard support", "Basic analytics"],
    cta: "Get Started",
  },
  {
    name: "Pro", price: "₹999", period: "/month", icon: Crown, popular: true, gradient: "gradient-primary",
    features: ["Unlimited listings", "Advanced analytics", "Priority visibility", "Verified badge", "Premium support", "AI insights", "Lead notifications", "Featured on homepage"],
    cta: "Upgrade to Pro",
  },
  {
    name: "Featured Listing", price: "₹499", period: "/one-time", icon: Star, popular: false, gradient: "",
    features: ["Homepage placement", "Priority in search", "Special badge", "30-day boost", "2x more inquiries"],
    cta: "Boost Listing",
  },
];

const addons = [
  { name: "Verified Badge", price: "₹299", desc: "Build trust with a verified listing badge." },
  { name: "Photography Service", price: "₹1,999", desc: "Professional photos of your shop." },
  { name: "Legal Agreement", price: "₹499", desc: "Ready-to-use rental agreement template." },
  { name: "Lead Package", price: "₹100/lead", desc: "Pay per genuine renter inquiry." },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-28 pb-20">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="section-badge bg-secondary/10 text-secondary mb-5">Pricing</span>
          <h1 className="text-3xl md:text-[2.75rem] font-heading font-bold text-foreground leading-tight">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-lg">Choose the plan that works best for your business.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-card rounded-2xl p-8 shadow-card relative border transition-all duration-500 hover:shadow-elevated hover:-translate-y-1 ${
                plan.popular ? "border-primary/30 ring-1 ring-primary/20" : "border-border/20"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold shadow-lg">
                  Most Popular
                </span>
              )}
              <div className={`w-12 h-12 rounded-2xl ${plan.popular ? "gradient-primary" : "bg-muted"} flex items-center justify-center mb-5 shadow-lg`}>
                <plan.icon className={`w-6 h-6 ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`} />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">{plan.name}</h3>
              <div className="mt-3 mb-8">
                <span className="stat-number text-4xl text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? "cta" : "hero-outline"} className="w-full gap-2 py-5 rounded-xl">
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-10">Add-on Services</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {addons.map((addon) => (
              <div key={addon.name} className="bg-card rounded-2xl p-6 shadow-card flex items-center justify-between border border-border/20 hover:shadow-card-hover transition-all duration-300">
                <div>
                  <h4 className="font-heading font-bold text-foreground">{addon.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{addon.desc}</p>
                </div>
                <div className="text-right flex-shrink-0 ml-6">
                  <p className="stat-number text-lg text-foreground">{addon.price}</p>
                  <Button variant="ghost" size="sm" className="text-primary mt-1 font-semibold">Add →</Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Pricing;
