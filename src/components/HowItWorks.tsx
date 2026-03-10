import { motion } from "framer-motion";
import { Store, Upload, MessageSquare, Search, BarChart3, Users } from "lucide-react";

const ownerSteps = [
  { icon: Store, title: "Add Your Shop", desc: "Create a listing by entering your shop details, location, and basic information." },
  { icon: Upload, title: "Upload Photos & Set Rent", desc: "Showcase your space with clear photos and set your monthly rent and terms." },
  { icon: MessageSquare, title: "Start Receiving Inquiries", desc: "Interested renters can contact you directly and schedule visits." },
];

const renterSteps = [
  { icon: Search, title: "Search Shops Near You", desc: "Browse available shops in your preferred location using smart filters." },
  { icon: BarChart3, title: "Compare Your Options", desc: "Review rent, size, and amenities to find the space that fits your business." },
  { icon: Users, title: "Connect With Owners", desc: "Contact shop owners directly and discuss details — no brokers involved." },
];

const StepCard = ({ step, index, delay }: { step: typeof ownerSteps[0]; index: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 group border border-border/20 hover:-translate-y-0.5"
  >
    <div className="flex items-start gap-5">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <step.icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1">
        <span className="font-mono text-xs text-muted-foreground/50 tracking-wider font-semibold">0{index + 1}</span>
        <h3 className="font-heading font-semibold text-foreground text-lg mt-0.5">{step.title}</h3>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{step.desc}</p>
      </div>
    </div>
  </motion.div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-28 subtle-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-badge bg-secondary/10 text-secondary mb-5">Simple Process</span>
          <h2 className="text-3xl md:text-[2.75rem] font-heading font-semibold text-foreground leading-tight">
            How ShopLease Works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg leading-relaxed">
            Getting started is quick and simple. Whether you're listing a shop or looking for one, the process takes just a few minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Owners Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Store className="w-5 h-5 text-primary" />
              </span>
              For Shop Owners
            </motion.h3>
            <div className="space-y-4">
              {ownerSteps.map((step, i) => (
                <StepCard key={step.title} step={step} index={i} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Renters Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Search className="w-5 h-5 text-secondary" />
              </span>
              For Renters
            </motion.h3>
            <div className="space-y-4">
              {renterSteps.map((step, i) => (
                <StepCard key={step.title} step={step} index={i} delay={i * 0.1 + 0.15} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
