import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Store, ArrowLeft, User, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [userType, setUserType] = useState<"renter" | "owner" | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "" });

  const update = (field: string, value: string) => setFormData((p) => ({ ...p, [field]: value }));

  return (
    <div className="min-h-screen bg-background flex">
      <div className="hidden lg:flex lg:w-1/2 gradient-primary relative overflow-hidden items-center justify-center p-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 border border-primary-foreground/20 rounded-full" />
          <div className="absolute bottom-32 right-16 w-[400px] h-[400px] border border-primary-foreground/20 rounded-full" />
        </div>
        <div className="relative z-10 text-primary-foreground max-w-md">
          <div className="flex items-center gap-2.5 mb-10">
            <div className="w-11 h-11 rounded-xl bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
              <Store className="w-6 h-6" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight">ShopLease</span>
          </div>
          <h1 className="text-4xl font-heading font-bold mb-5 leading-tight">Start your journey with ShopLease</h1>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">Join thousands of shop owners and renters across India.</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Create your account</h2>
          <p className="text-muted-foreground mb-6">Choose your account type to get started.</p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setUserType("renter")}
              className={`p-5 rounded-2xl border-2 text-center transition-all duration-200 ${userType === "renter" ? "border-primary bg-primary/[0.04] shadow-glow" : "border-border/50 hover:border-primary/30"}`}
            >
              <User className="w-6 h-6 mx-auto mb-2 text-primary" />
              <span className="font-heading font-semibold text-sm text-foreground block">Shop Renter</span>
              <span className="text-xs text-muted-foreground block mt-1">Find shops to rent</span>
            </button>
            <button
              onClick={() => setUserType("owner")}
              className={`p-5 rounded-2xl border-2 text-center transition-all duration-200 ${userType === "owner" ? "border-secondary bg-secondary/[0.04]" : "border-border/50 hover:border-secondary/30"}`}
            >
              <Building2 className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <span className="font-heading font-semibold text-sm text-foreground block">Shop Owner</span>
              <span className="text-xs text-muted-foreground block mt-1">List your shops</span>
            </button>
          </div>

          <div className="space-y-3">
            {[
              { label: "Full Name", type: "text", field: "name", placeholder: "Rajesh Patel" },
              { label: "Email", type: "email", field: "email", placeholder: "rajesh@example.com" },
              { label: "Phone Number", type: "tel", field: "phone", placeholder: "+91 98765 43210" },
              { label: "Password", type: "password", field: "password", placeholder: "Min 8 characters" },
            ].map((f) => (
              <div key={f.field}>
                <label className="block text-sm font-medium text-foreground mb-1.5">{f.label}</label>
                <input
                  type={f.type}
                  value={formData[f.field as keyof typeof formData]}
                  onChange={(e) => update(f.field, e.target.value)}
                  placeholder={f.placeholder}
                  className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            ))}

            <Link to={userType === "owner" ? "/dashboard" : "/renter"}>
              <Button variant="cta" className="w-full py-5 mt-2 rounded-xl">Create Account</Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-8">
            Already have an account? <Link to="/login" className="text-primary font-semibold hover:underline">Log in</Link>
          </p>
          <p className="text-xs text-muted-foreground text-center mt-4">
            By signing up, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
