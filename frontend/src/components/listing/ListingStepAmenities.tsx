import type { ListingFormData } from "@/pages/CreateListing";
import { Zap, Droplet, Wind, Home, Wifi, Battery, Truck, Building2, Shield, Video, GripVertical, ParkingCircle, Bath } from "lucide-react";

interface Props {
  formData: ListingFormData;
  updateForm: (updates: Partial<ListingFormData>) => void;
}

const amenityIconMap: Record<string, typeof Zap> = {
  parking: ParkingCircle,
  washroom: Bath,
  mainroad: GripVertical,
  electricity: Zap,
  water: Droplet,
  ac: Wind,
  lift: Building2,
  security: Shield,
  cctv: Video,
  storage: Home,
  shutter: Home,
  display: Home,
  wifi: Wifi,
  generator: Battery,
  loading: Truck,
  mezzanine: Building2,
};

const amenitiesList = [
  { id: "parking", label: "Parking", icon: "parking" },
  { id: "washroom", label: "Washroom", icon: "washroom" },
  { id: "mainroad", label: "Main Road Facing", icon: "mainroad" },
  { id: "electricity", label: "Electricity (3-phase)", icon: "electricity" },
  { id: "water", label: "Water Supply", icon: "water" },
  { id: "ac", label: "Air Conditioning", icon: "ac" },
  { id: "lift", label: "Lift Access", icon: "lift" },
  { id: "security", label: "24/7 Security", icon: "security" },
  { id: "cctv", label: "CCTV", icon: "cctv" },
  { id: "storage", label: "Storage Room", icon: "storage" },
  { id: "shutter", label: "Rolling Shutter", icon: "shutter" },
  { id: "display", label: "Display Window", icon: "display" },
  { id: "wifi", label: "Wi-Fi Ready", icon: "wifi" },
  { id: "generator", label: "Power Backup", icon: "generator" },
  { id: "loading", label: "Loading Area", icon: "loading" },
  { id: "mezzanine", label: "Mezzanine Floor", icon: "mezzanine" },
];

const ListingStepAmenities = ({ formData, updateForm }: Props) => {
  const toggleAmenity = (id: string) => {
    const updated = formData.amenities.includes(id)
      ? formData.amenities.filter((a) => a !== id)
      : [...formData.amenities, id];
    updateForm({ amenities: updated });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-heading font-semibold text-foreground mb-1">Amenities & Features</h2>
        <p className="text-sm text-muted-foreground">Select all amenities available at your shop.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {amenitiesList.map((amenity) => {
          const IconComponent = amenityIconMap[amenity.icon];
          return (
            <button
              key={amenity.id}
              onClick={() => toggleAmenity(amenity.id)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${
                formData.amenities.includes(amenity.id)
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <IconComponent className={`w-5 h-5 flex-shrink-0 ${formData.amenities.includes(amenity.id) ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm font-medium ${
                formData.amenities.includes(amenity.id) ? "text-primary" : "text-foreground"
              }`}>
                {amenity.label}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-muted-foreground">
        Selected {formData.amenities.length} of {amenitiesList.length} amenities
      </p>
    </div>
  );
};

export default ListingStepAmenities;
