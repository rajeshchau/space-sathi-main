import { Heart, Search, MessageSquare, CalendarCheck, Settings, Store } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Link } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Saved Shops", url: "/renter", icon: Heart },
  { title: "Search Shops", url: "/browse", icon: Search },
  { title: "Messages", url: "/renter/messages", icon: MessageSquare },
  { title: "Visit Requests", url: "/renter/visits", icon: CalendarCheck },
  { title: "Profile Settings", url: "/renter/settings", icon: Settings },
];

export function RenterSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
              <Store className="w-4 h-4 text-primary-foreground" />
            </div>
            {!collapsed && <span className="font-heading font-bold text-lg text-foreground tracking-tight">Shop<span className="text-gradient-primary">Lease</span></span>}
          </Link>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Renter</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end={item.url === "/renter"} className="hover:bg-muted/50" activeClassName="bg-primary/10 text-primary font-medium">
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
              <span className="text-xs font-bold text-primary-foreground">PS</span>
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Priya Sharma</p>
                <p className="text-xs text-muted-foreground truncate">Renter</p>
              </div>
            )}
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
