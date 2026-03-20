import { LayoutDashboard, Building2, BarChart3, MessageSquare, CreditCard, Plus, Store, Users, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "My Listings", url: "/dashboard/listings", icon: Building2 },
  { title: "Leads", url: "/dashboard/leads", icon: Users },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Messages", url: "/dashboard/messages", icon: MessageSquare },
  { title: "Payments", url: "/dashboard/payments", icon: CreditCard },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function OwnerSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Logo */}
        <div className="p-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
              <Store className="w-4 h-4 text-primary-foreground" />
            </div>
            {!collapsed && (
              <span className="font-heading font-bold text-lg text-foreground tracking-tight">
                Shop<span className="text-gradient-primary">Lease</span>
              </span>
            )}
          </Link>
        </div>

        {/* Add listing button */}
        <div className="px-3 mb-2">
          <Link to="/create-listing">
            <Button variant="cta" className={`${collapsed ? "w-8 h-8 p-0" : "w-full"} gap-2`} size={collapsed ? "icon" : "sm"}>
              <Plus className="w-4 h-4" />
              {!collapsed && "Add Listing"}
            </Button>
          </Link>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className="hover:bg-muted/50"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className={`p-3 ${collapsed ? "text-center" : ""}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full gradient-saffron flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-primary-foreground">RP</span>
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Rajesh Patel</p>
                <p className="text-xs text-muted-foreground truncate">Shop Owner</p>
              </div>
            )}
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
