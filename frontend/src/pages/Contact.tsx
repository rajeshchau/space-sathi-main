import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">Contact</span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Get in Touch</h1>
            <p className="text-muted-foreground mt-2">We'd love to hear from you. Reach out with any questions.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@shoplease.in", link: "mailto:hello@shoplease.in" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210", link: "tel:+919876543210" },
                { icon: MessageSquare, label: "WhatsApp", value: "Chat with us", link: "https://wa.me/919876543210" },
                { icon: MapPin, label: "Office", value: "Navrangpura, Ahmedabad, Gujarat 380009", link: "#" },
              ].map((item) => (
                <a key={item.label} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-card rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all flex items-start gap-4 group block">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Contact form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 shadow-card space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="Tell us more..." />
                </div>
                <Button variant="cta" type="submit" className="gap-2"><Send className="w-4 h-4" /> Send Message</Button>
              </form>
            </motion.div>
          </div>

          {/* Map placeholder */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 rounded-2xl bg-muted/50 border border-border h-64 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl">📍</span>
              <p className="text-muted-foreground mt-2">Navrangpura, Ahmedabad</p>
              <p className="text-xs text-muted-foreground">Google Maps integration coming soon</p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
