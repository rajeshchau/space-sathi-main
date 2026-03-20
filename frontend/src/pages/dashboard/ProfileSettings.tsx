import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Save, User, Phone, Mail, MapPin, Building2, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: "Rajesh Patel",
    email: "rajesh@example.com",
    phone: "+91 98765 43210",
    businessType: "Retail",
    city: "Ahmedabad",
    bio: "Shop owner with 10+ years of experience in commercial real estate in Gujarat.",
    budget: "₹20,000 - ₹50,000",
  });

  const update = (field: string, value: string) =>
    setProfile((p) => ({ ...p, [field]: value }));

  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-xl font-heading font-bold text-foreground">Profile Settings</h2>
        <p className="text-sm text-muted-foreground">Manage your account information.</p>
      </div>

      {/* Avatar section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl p-6 shadow-card border border-border/20"
      >
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-primary-foreground">RP</span>
            </div>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center hover:bg-muted transition-colors shadow-sm">
              <Camera className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground text-lg">{profile.name}</h3>
            <p className="text-sm text-muted-foreground">Shop Owner • Ahmedabad</p>
            <p className="text-xs text-primary font-medium mt-1">Premium Member</p>
          </div>
        </div>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl p-6 shadow-card border border-border/20 space-y-5"
      >
        <h3 className="font-heading font-semibold text-foreground">Personal Information</h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Full Name", field: "name", icon: User, type: "text" },
            { label: "Email Address", field: "email", icon: Mail, type: "email" },
            { label: "Phone Number", field: "phone", icon: Phone, type: "tel" },
            { label: "City", field: "city", icon: MapPin, type: "text" },
            { label: "Business Type", field: "businessType", icon: Building2, type: "text" },
            { label: "Budget Range", field: "budget", icon: IndianRupee, type: "text" },
          ].map((f) => (
            <div key={f.field}>
              <label className="flex items-center gap-1.5 text-sm font-medium text-foreground mb-1.5">
                <f.icon className="w-3.5 h-3.5 text-muted-foreground" /> {f.label}
              </label>
              <input
                type={f.type}
                value={profile[f.field as keyof typeof profile]}
                onChange={(e) => update(f.field, e.target.value)}
                className="input-premium"
              />
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Bio</label>
          <textarea
            value={profile.bio}
            onChange={(e) => update("bio", e.target.value)}
            rows={3}
            className="input-premium resize-none"
          />
        </div>

        <div className="flex justify-end pt-2">
          <Button variant="cta" onClick={handleSave} className="gap-2">
            <Save className="w-4 h-4" /> Save Changes
          </Button>
        </div>
      </motion.div>

      {/* Danger zone */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-2xl p-6 shadow-card border border-destructive/20"
      >
        <h3 className="font-heading font-semibold text-destructive mb-2">Danger Zone</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Once you delete your account, there is no going back.
        </p>
        <Button variant="destructive" size="sm">Delete Account</Button>
      </motion.div>
    </div>
  );
};

export default ProfileSettings;
