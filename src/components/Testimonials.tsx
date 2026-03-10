import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Shop Owner, Ahmedabad",
    content: "ShopLease helped me find a tenant for my corner shop in just 2 weeks. No broker fees, direct contact — exactly what I needed.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Business Owner, Mumbai",
    content: "Found the perfect location for my boutique. The AI suggestions were surprisingly accurate about the area's potential.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Shop Owner, Delhi",
    content: "Listed 3 properties and got genuine inquiries within days. The verified badge built instant trust with renters.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <span className="section-badge bg-secondary/10 text-secondary mb-5">Success Stories</span>
        <h2 className="text-3xl md:text-[2.75rem] font-heading font-bold text-foreground leading-tight">
          Trusted by Thousands
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-lg">See how ShopLease is helping shop owners and renters across India.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/20 hover:-translate-y-1 relative"
          >
            <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />
            
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">"{t.content}"</p>
            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-border/50 ring-offset-2 ring-offset-card" loading="lazy" />
              <div>
                <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
