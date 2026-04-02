import type { ListingFormData } from "@/pages/CreateListing";
import { ChevronDown } from "lucide-react";

interface Props {
  formData: ListingFormData;
  updateForm: (updates: Partial<ListingFormData>) => void;
}

const cities = ["Ahmedabad", "Surat", "Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Jaipur"];
const floors = ["Basement", "Ground Floor", "1st Floor", "2nd Floor", "3rd Floor", "4th Floor+"];

const ListingStepLocation = ({ formData, updateForm }: Props) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-lg font-heading font-semibold text-foreground mb-1">Location Details</h2>
      <p className="text-sm text-muted-foreground">Where is your shop located?</p>
    </div>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">City *</label>
        <div className="relative">
          <select
            value={formData.city}
            onChange={(e) => updateForm({ city: e.target.value })}
            className="w-full appearance-none px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all border-border"
          >
            <option value="">Select City</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Area / Locality *</label>
        <input
          type="text"
          value={formData.area}
          onChange={(e) => updateForm({ area: e.target.value })}
          placeholder="e.g. Navrangpura, CG Road, MG Road"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Full Address</label>
        <textarea
          value={formData.address}
          onChange={(e) => updateForm({ address: e.target.value })}
          placeholder="Complete shop address with landmarks"
          rows={3}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Floor *</label>
        <div className="flex flex-wrap gap-2">
          {floors.map((f) => (
            <button
              key={f}
              onClick={() => updateForm({ floor: f })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                formData.floor === f
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="rounded-xl border border-border bg-muted/50 h-48 flex items-center justify-center">
        <div className="text-center">
          <span className="text-3xl">📍</span>
          <p className="text-sm text-muted-foreground mt-2">Map integration coming soon</p>
          <p className="text-xs text-muted-foreground">Pin your exact shop location</p>
        </div>
      </div>
    </div>
  </div>
);

export default ListingStepLocation;
