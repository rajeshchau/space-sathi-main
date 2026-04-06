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

const StepCard = ({
  step,
  index,
  delay,
  iconColor,
  iconBg,
  iconBorder,
  cardBorder,
}: {
  step: typeof ownerSteps[0];
  index: number;
  delay: number;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
  cardBorder: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`relative rounded-xl border bg-card shadow-sm hover:shadow-lg transition-all duration-300 group p-6 ${cardBorder}`}
  >
    <div className="flex items-start gap-5">
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl border ${iconBg} ${iconBorder} flex items-center justify-center group-hover:scale-105 transition-all duration-300`}>
        <step.icon className={`w-5 h-5 ${iconColor}`} />
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
    <section id="how-it-works" className="py-12 md:py-16 subtle-bg">
      <div className="container space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="section-badge bg-secondary/10 text-secondary mb-6">Simple Process</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-foreground leading-tight">
            How ShopLease Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Getting started is quick and simple. Whether you're listing a shop or looking for one, the process takes just a few minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />
          {/* Owners Column */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-xl border border-green-100 bg-green-50 flex items-center justify-center">
                <Store className="w-5 h-5 text-green-600" />
              </span>
              For Shop Owners
            </motion.h3>
            <div className="space-y-4">
              {ownerSteps.map((step, i) => (
                <StepCard key={step.title} step={step} index={i} delay={i * 0.1} iconColor="text-green-600" iconBg="bg-green-50" iconBorder="border-green-100" cardBorder="border-green-100" />
              ))}
            </div>
          </div>

          {/* Renters Column */}
          <div className="space-y-6 border-t pt-6 mt-6 md:border-t-0 md:pt-0 md:mt-0">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-xl border border-blue-100 bg-blue-50 flex items-center justify-center">
                <Search className="w-5 h-5 text-blue-600" />
              </span>
              For Renters
            </motion.h3>
            <div className="space-y-4">
              {renterSteps.map((step, i) => (
                <StepCard key={step.title} step={step} index={i} delay={i * 0.1 + 0.15} iconColor="text-blue-600" iconBg="bg-blue-50" iconBorder="border-blue-100" cardBorder="border-blue-100" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
