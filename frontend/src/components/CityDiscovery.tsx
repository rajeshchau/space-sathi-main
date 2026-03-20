import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import cityAhmedabad from "@/assets/city-ahmedabad.jpg";
import citySurat from "@/assets/city-surat.jpg";
import cityMumbai from "@/assets/city-mumbai.jpg";
import cityDelhi from "@/assets/city-delhi.jpg";
import cityBangalore from "@/assets/city-bangalore.jpg";

const cities = [
  { name: "Ahmedabad", count: "2,400+", image: cityAhmedabad },
  { name: "Surat", count: "1,800+", image: citySurat },
  { name: "Mumbai", count: "3,200+", image: cityMumbai },
  { name: "Delhi", count: "2,900+", image: cityDelhi },
  { name: "Bangalore", count: "2,100+", image: cityBangalore },
];

const CityDiscovery = () => (
  <section id="cities" className="py-28 subtle-bg">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <span className="section-badge bg-secondary/10 text-secondary mb-5">Discover</span>
        <h2 className="text-3xl md:text-[2.75rem] font-heading font-bold text-foreground leading-tight">
          Explore by City
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-lg">Browse thousands of commercial spaces across India's top cities.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {cities.map((city, i) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/browse"
              className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[4/5] block shadow-card hover:shadow-elevated transition-all duration-500"
            >
              <img
                src={city.image}
                alt={`Shops in ${city.name}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent group-hover:from-foreground/90 transition-all duration-500" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading font-bold text-xl text-card">{city.name}</h3>
                <p className="text-sm text-card/60 font-mono flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" /> {city.count} shops
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CityDiscovery;
