import { Users, Building2, CreditCard, Flag, Shield, Star, Store } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Link } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Overview", url: "/admin", icon: Shield },
  { title: "Users", url: "/admin/users", icon: Users },
  { title: "Listings", url: "/admin/listings", icon: Building2 },
  { title: "Payments", url: "/admin/payments", icon: CreditCard },
  { title: "Featured", url: "/admin/featured", icon: Star },
  { title: "Reports", url: "/admin/reports", icon: Flag },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-destructive flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-destructive-foreground" />
            </div>
            {!collapsed && <span className="font-heading font-bold text-lg text-foreground">Admin</span>}
          </Link>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end={item.url === "/admin"} className="hover:bg-muted/50" activeClassName="bg-primary/10 text-primary font-medium">
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
    </Sidebar>
  );
}
