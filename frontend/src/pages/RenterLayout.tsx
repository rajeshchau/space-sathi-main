import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { RenterSidebar } from "@/components/dashboard/RenterSidebar";

const RenterLayout = () => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full">
      <RenterSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 flex items-center border-b border-border px-4 bg-background sticky top-0 z-40">
          <SidebarTrigger className="mr-4" />
          <h1 className="font-heading font-semibold text-foreground">Renter Dashboard</h1>
        </header>
        <main className="flex-1 p-6 bg-muted/20">
          <Outlet />
        </main>
      </div>
    </div>
  </SidebarProvider>
);

export default RenterLayout;
