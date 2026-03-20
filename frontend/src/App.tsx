import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileBottomNav from "@/components/MobileBottomNav";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateListing from "./pages/CreateListing";
import BrowseShops from "./pages/BrowseShops";
import ShopDetail from "./pages/ShopDetail";
import Pricing from "./pages/Pricing";
import AITools from "./pages/AITools";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import DashboardLayout from "./pages/DashboardLayout";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import DashboardListings from "./pages/dashboard/DashboardListings";
import DashboardLeads from "./pages/dashboard/DashboardLeads";
import DashboardAnalytics from "./pages/dashboard/DashboardAnalytics";
import DashboardMessages from "./pages/dashboard/DashboardMessages";
import DashboardPayments from "./pages/dashboard/DashboardPayments";
import ProfileSettings from "./pages/dashboard/ProfileSettings";

import RenterLayout from "./pages/RenterLayout";
import RenterSaved from "./pages/renter/RenterSaved";
import RenterVisits from "./pages/renter/RenterVisits";

import RoleSelection from "./pages/RoleSelection";

import AdminLayout from "./pages/AdminLayout";
import AdminOverview from "./pages/admin/AdminOverview";
import AdminUsers from "./pages/admin/AdminUsers";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public pages */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />

            {/* Protected pages */}
            <Route path="/browse" element={<ProtectedRoute><BrowseShops /></ProtectedRoute>} />
            <Route path="/shop/:id" element={<ProtectedRoute><ShopDetail /></ProtectedRoute>} />
            <Route path="/ai-tools" element={<ProtectedRoute><AITools /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            <Route path="/create-listing" element={<ProtectedRoute><CreateListing /></ProtectedRoute>} />
            <Route path="/role-selection" element={<ProtectedRoute><RoleSelection /></ProtectedRoute>} />

            {/* Owner Dashboard */}
            <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route index element={<DashboardOverview />} />
              <Route path="listings" element={<DashboardListings />} />
              <Route path="leads" element={<DashboardLeads />} />
              <Route path="analytics" element={<DashboardAnalytics />} />
              <Route path="messages" element={<DashboardMessages />} />
              <Route path="payments" element={<DashboardPayments />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            {/* Renter Dashboard */}
            <Route path="/renter" element={<ProtectedRoute><RenterLayout /></ProtectedRoute>}>
              <Route index element={<RenterSaved />} />
              <Route path="messages" element={<DashboardMessages />} />
              <Route path="visits" element={<RenterVisits />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            {/* Admin Panel */}
            <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
              <Route index element={<AdminOverview />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="listings" element={<DashboardListings />} />
              <Route path="payments" element={<DashboardPayments />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
          <MobileBottomNav />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
