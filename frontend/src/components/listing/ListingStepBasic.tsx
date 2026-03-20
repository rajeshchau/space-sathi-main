import type { ListingFormData } from "@/pages/CreateListing";

interface Props {
  formData: ListingFormData;
  updateForm: (updates: Partial<ListingFormData>) => void;
}

const shopTypes = ["Corner Shop", "Mall Shop", "Market Shop", "Standalone Shop", "Showroom", "Warehouse"];
const businessTypes = ["Grocery", "Pharmacy", "Restaurant", "Clothing", "Electronics", "Salon", "Gym", "Office", "Cafe", "Medical Clinic", "Bakery", "Other"];

const ListingStepBasic = ({ formData, updateForm }: Props) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-lg font-heading font-semibold text-foreground mb-1">Basic Information</h2>
      <p className="text-sm text-muted-foreground">Tell us about your shop.</p>
    </div>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Shop Title *</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => updateForm({ title: e.target.value })}
          placeholder="e.g. Prime Corner Shop in Navrangpura"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => updateForm({ description: e.target.value })}
          placeholder="Describe your shop, its surroundings, footfall, and any unique features..."
          rows={4}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
        />
        <p className="text-xs text-muted-foreground mt-1">Tip: A detailed description gets 3x more inquiries.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Shop Type *</label>
        <div className="flex flex-wrap gap-2">
          {shopTypes.map((type) => (
            <button
              key={type}
              onClick={() => updateForm({ shopType: type })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                formData.shopType === type
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Suitable For (select multiple)</label>
        <div className="flex flex-wrap gap-2">
          {businessTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                const updated = formData.suitableFor.includes(type)
                  ? formData.suitableFor.filter((t) => t !== type)
                  : [...formData.suitableFor, type];
                updateForm({ suitableFor: updated });
              }}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all border ${
                formData.suitableFor.includes(type)
                  ? "border-secondary bg-secondary/10 text-secondary"
                  : "border-border text-muted-foreground hover:border-secondary/30"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ListingStepBasic;
