import { Home, Search, PlusCircle, Heart, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const items = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Search, label: "Browse", to: "/browse" },
  { icon: PlusCircle, label: "List", to: "/create-listing" },
  { icon: Heart, label: "Saved", to: "/renter" },
  { icon: User, label: "Account", to: "/login" },
];

const MobileBottomNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] safe-area-bottom">
    <div className="flex items-center justify-around h-16">
      {items.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          end={item.to === "/"}
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-muted-foreground transition-colors"
          activeClassName="text-primary"
        >
          <item.icon className="w-5 h-5" />
          <span className="text-[10px] font-medium">{item.label}</span>
        </NavLink>
      ))}
    </div>
  </nav>
);

export default MobileBottomNav;
