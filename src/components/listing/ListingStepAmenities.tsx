import type { ListingFormData } from "@/pages/CreateListing";

interface Props {
  formData: ListingFormData;
  updateForm: (updates: Partial<ListingFormData>) => void;
}

const amenitiesList = [
  { id: "parking", label: "Parking", icon: "🅿️" },
  { id: "washroom", label: "Washroom", icon: "🚻" },
  { id: "mainroad", label: "Main Road Facing", icon: "🛣️" },
  { id: "electricity", label: "Electricity (3-phase)", icon: "⚡" },
  { id: "water", label: "Water Supply", icon: "💧" },
  { id: "ac", label: "Air Conditioning", icon: "❄️" },
  { id: "lift", label: "Lift Access", icon: "🛗" },
  { id: "security", label: "24/7 Security", icon: "🔒" },
  { id: "cctv", label: "CCTV", icon: "📹" },
  { id: "storage", label: "Storage Room", icon: "📦" },
  { id: "shutter", label: "Rolling Shutter", icon: "🚪" },
  { id: "display", label: "Display Window", icon: "🪟" },
  { id: "wifi", label: "Wi-Fi Ready", icon: "📶" },
  { id: "generator", label: "Power Backup", icon: "🔋" },
  { id: "loading", label: "Loading Area", icon: "🚛" },
  { id: "mezzanine", label: "Mezzanine Floor", icon: "🏗️" },
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
        {amenitiesList.map((amenity) => (
          <button
            key={amenity.id}
            onClick={() => toggleAmenity(amenity.id)}
            className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${
              formData.amenities.includes(amenity.id)
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/30"
            }`}
          >
            <span className="text-xl">{amenity.icon}</span>
            <span className={`text-sm font-medium ${
              formData.amenities.includes(amenity.id) ? "text-primary" : "text-foreground"
            }`}>
              {amenity.label}
            </span>
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Selected {formData.amenities.length} of {amenitiesList.length} amenities
      </p>
    </div>
  );
};

export default ListingStepAmenities;
