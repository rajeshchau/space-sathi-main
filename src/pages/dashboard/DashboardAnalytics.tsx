import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const viewsData = [
  { month: "Sep", views: 420 },
  { month: "Oct", views: 680 },
  { month: "Nov", views: 520 },
  { month: "Dec", views: 890 },
  { month: "Jan", views: 1100 },
  { month: "Feb", views: 950 },
  { month: "Mar", views: 1350 },
];

const inquiriesData = [
  { month: "Sep", inquiries: 5 },
  { month: "Oct", inquiries: 8 },
  { month: "Nov", inquiries: 6 },
  { month: "Dec", inquiries: 12 },
  { month: "Jan", inquiries: 15 },
  { month: "Feb", inquiries: 11 },
  { month: "Mar", inquiries: 18 },
];

const listingPerformance = [
  { name: "Navrangpura Shop", value: 35 },
  { name: "Phoenix Mall", value: 27 },
  { name: "MG Road Shop", value: 20 },
  { name: "Surat Shop", value: 12 },
  { name: "Delhi Shop", value: 6 },
];

const COLORS = ["hsl(174, 76%, 26%)", "hsl(24, 94%, 53%)", "hsl(45, 93%, 58%)", "hsl(200, 20%, 70%)", "hsl(215, 16%, 85%)"];

const DashboardAnalytics = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-xl font-heading font-bold text-foreground">Analytics</h2>
      <p className="text-sm text-muted-foreground">Track your listing performance over time.</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      {/* Views chart */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl p-6 shadow-card"
      >
        <h3 className="font-heading font-semibold text-foreground mb-4">Total Views</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={viewsData}>
            <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
            <Bar dataKey="views" fill="hsl(174, 76%, 26%)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Inquiries chart */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-2xl p-6 shadow-card"
      >
        <h3 className="font-heading font-semibold text-foreground mb-4">Inquiries Received</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={inquiriesData}>
            <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
            <Line type="monotone" dataKey="inquiries" stroke="hsl(24, 94%, 53%)" strokeWidth={2.5} dot={{ fill: "hsl(24, 94%, 53%)", r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>

    {/* Pie chart */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card rounded-2xl p-6 shadow-card"
    >
      <h3 className="font-heading font-semibold text-foreground mb-4">Inquiry Distribution by Listing</h3>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <ResponsiveContainer width={250} height={250}>
          <PieChart>
            <Pie data={listingPerformance} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3}>
              {listingPerformance.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="space-y-2.5 flex-1">
          {listingPerformance.map((item, i) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS[i] }} />
              <span className="text-sm text-foreground flex-1">{item.name}</span>
              <span className="font-mono text-sm font-medium text-foreground">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

export default DashboardAnalytics;
