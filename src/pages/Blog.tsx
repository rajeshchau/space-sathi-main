import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "best-areas-to-open-shop-india",
    title: "Best Areas to Open a Shop in India (2026 Guide)",
    excerpt: "Discover the top commercial locations across India for starting your retail business. From high-street markets to emerging commercial hubs.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    date: "Mar 5, 2026",
    category: "Location Guide",
    readTime: "8 min read",
  },
  {
    slug: "rent-shop-faster",
    title: "How to Rent Out Your Shop 3x Faster",
    excerpt: "Proven strategies for shop owners to attract quality renters quickly. From pricing tips to listing optimization techniques.",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop",
    date: "Feb 28, 2026",
    category: "Tips & Tricks",
    readTime: "5 min read",
  },
  {
    slug: "commercial-real-estate-trends-india",
    title: "Commercial Real Estate Trends in India 2026",
    excerpt: "Analysis of the Indian commercial property market. Rental prices, demand patterns, and emerging opportunities for investors.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    date: "Feb 20, 2026",
    category: "Market Insights",
    readTime: "10 min read",
  },
  {
    slug: "small-business-location-guide",
    title: "Small Business Location Guide: How to Choose the Right Spot",
    excerpt: "Factors every entrepreneur should consider when choosing a commercial location. Footfall analysis, competition mapping, and more.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    date: "Feb 12, 2026",
    category: "Business Guide",
    readTime: "7 min read",
  },
  {
    slug: "rental-agreement-guide",
    title: "Complete Guide to Commercial Rental Agreements in India",
    excerpt: "Everything you need to know about lease terms, legal requirements, and protecting your rights as a shop owner or renter.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop",
    date: "Feb 5, 2026",
    category: "Legal",
    readTime: "6 min read",
  },
];

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Blog</span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Insights & Guides</h1>
          <p className="text-muted-foreground mt-2">Expert tips for shop owners and renters across India.</p>
        </motion.div>

        {/* Featured post */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all cursor-pointer mb-8 group">
          <div className="grid md:grid-cols-2">
            <img src={posts[0].image} alt={posts[0].title} className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-medium text-secondary uppercase tracking-wider">{posts[0].category}</span>
              <h2 className="text-xl font-heading font-bold text-foreground mt-2 group-hover:text-primary transition-colors">{posts[0].title}</h2>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{posts[0].excerpt}</p>
              <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{posts[0].date}</span>
                <span>{posts[0].readTime}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-4">Read More <ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>
        </motion.div>

        {/* Post grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.slice(1).map((post, i) => (
            <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all cursor-pointer group">
              <img src={post.image} alt={post.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-5">
                <span className="text-xs font-medium text-secondary uppercase tracking-wider">{post.category}</span>
                <h3 className="font-heading font-semibold text-foreground mt-1.5 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Blog;
