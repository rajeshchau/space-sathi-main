import { MapPin, Maximize, IndianRupee, BadgeCheck } from "lucide-react";
import type { ListingFormData } from "@/pages/CreateListing";

interface Props {
  formData: ListingFormData;
}

const amenityLabels: Record<string, string> = {
  parking: "Parking", washroom: "Washroom", mainroad: "Main Road Facing",
  electricity: "Electricity", water: "Water Supply", ac: "Air Conditioning",
  lift: "Lift Access", security: "24/7 Security", cctv: "CCTV",
  storage: "Storage Room", shutter: "Rolling Shutter", display: "Display Window",
  wifi: "Wi-Fi Ready", generator: "Power Backup", loading: "Loading Area", mezzanine: "Mezzanine Floor",
};

const ListingStepReview = ({ formData }: Props) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-lg font-heading font-semibold text-foreground mb-1">Review Your Listing</h2>
      <p className="text-sm text-muted-foreground">Make sure everything looks good before submitting.</p>
    </div>

    {/* Preview card */}
    <div className="rounded-2xl border border-border overflow-hidden shadow-card">
      {/* Photo */}
      {formData.photos.length > 0 ? (
        <img src={formData.photos[0]} alt="Shop" className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">No photos added</span>
        </div>
      )}

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground">
              {formData.title || "Untitled Shop"}
            </h3>
            {(formData.city || formData.area) && (
              <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <MapPin className="w-3.5 h-3.5" />
                {[formData.area, formData.city].filter(Boolean).join(", ")}
              </p>
            )}
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            <BadgeCheck className="w-3 h-3" /> Pending Review
          </span>
        </div>

        {formData.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{formData.description}</p>
        )}

        <div className="grid grid-cols-3 gap-3 py-3 border-y border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Monthly Rent</p>
            <p className="font-mono font-bold text-foreground flex items-center justify-center gap-0.5">
              <IndianRupee className="w-3.5 h-3.5" />{formData.monthlyRent || "—"}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Area</p>
            <p className="font-mono font-bold text-foreground flex items-center justify-center gap-1">
              <Maximize className="w-3.5 h-3.5" />{formData.areaSize || "—"} sq ft
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Floor</p>
            <p className="font-mono font-bold text-foreground">{formData.floor || "—"}</p>
          </div>
        </div>

        {formData.shopType && (
          <div>
            <p className="text-xs text-muted-foreground mb-1">Shop Type</p>
            <span className="px-3 py-1 rounded-full bg-muted text-sm text-foreground">{formData.shopType}</span>
          </div>
        )}

        {formData.suitableFor.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground mb-1">Suitable For</p>
            <div className="flex flex-wrap gap-1.5">
              {formData.suitableFor.map((s) => (
                <span key={s} className="px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">{s}</span>
              ))}
            </div>
          </div>
        )}

        {formData.amenities.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground mb-1">Amenities</p>
            <div className="flex flex-wrap gap-1.5">
              {formData.amenities.map((a) => (
                <span key={a} className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {amenityLabels[a] || a}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ListingStepReview;
