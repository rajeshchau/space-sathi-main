import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Store, ArrowLeft, LogIn, AlertCircle } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = (location.state as { from?: { pathname: string } })?.from?.pathname || "/";

  // If already logged in, redirect
  if (isAuthenticated) {
    navigate(redirectTo, { replace: true });
    return null;
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    const success = login(username, password);
    if (success) {
      toast.success("Welcome back! You're now logged in.");
      navigate(redirectTo, { replace: true });
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-primary relative overflow-hidden items-center justify-center p-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 border border-primary-foreground/20 rounded-full" />
          <div className="absolute bottom-32 right-16 w-[400px] h-[400px] border border-primary-foreground/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary-foreground/10 rounded-full" />
        </div>
        <div className="relative z-10 text-primary-foreground max-w-md">
          <div className="flex items-center gap-2.5 mb-10">
            <div className="w-11 h-11 rounded-xl bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
              <Store className="w-6 h-6" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight">ShopLease</span>
          </div>
          <h1 className="text-4xl font-heading font-bold mb-5 leading-tight">
            Find or list your perfect commercial space
          </h1>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">
            Join 10,000+ shop owners and renters across India. No brokers, verified listings.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Welcome to ShopLease</h2>
          <p className="text-muted-foreground mb-8">Sign in to access the platform.</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Username</label>
              <Input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="py-5 rounded-xl"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-5 rounded-xl"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 rounded-lg px-3 py-2.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <Button type="submit" className="w-full py-5 rounded-xl gap-2 gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              <LogIn className="w-4 h-4" /> Log In
            </Button>
          </form>

          {/* Test credentials hint */}
          <div className="mt-6 p-4 rounded-xl bg-muted/60 border border-border/40">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Test Account</p>
            <p className="text-sm text-foreground">
              Username: <code className="px-1.5 py-0.5 rounded bg-muted text-primary font-mono text-xs">rajesh</code>
            </p>
            <p className="text-sm text-foreground mt-1">
              Password: <code className="px-1.5 py-0.5 rounded bg-muted text-primary font-mono text-xs">rajesh</code>
            </p>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            This is a temporary login for development purposes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
