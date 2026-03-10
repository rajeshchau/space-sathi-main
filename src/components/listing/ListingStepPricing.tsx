import { IndianRupee } from "lucide-react";
import type { ListingFormData } from "@/pages/CreateListing";

interface Props {
  formData: ListingFormData;
  updateForm: (updates: Partial<ListingFormData>) => void;
}

const ListingStepPricing = ({ formData, updateForm }: Props) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-lg font-heading font-semibold text-foreground mb-1">Pricing & Size</h2>
      <p className="text-sm text-muted-foreground">Set the right price to attract quality renters.</p>
    </div>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Monthly Rent *</label>
        <div className="relative">
          <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={formData.monthlyRent}
            onChange={(e) => updateForm({ monthlyRent: e.target.value.replace(/[^0-9]/g, "") })}
            placeholder="25000"
            className="w-full rounded-xl border border-border bg-background pl-10 pr-20 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-mono text-lg"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">/month</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Security Deposit</label>
        <div className="relative">
          <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={formData.securityDeposit}
            onChange={(e) => updateForm({ securityDeposit: e.target.value.replace(/[^0-9]/g, "") })}
            placeholder="50000"
            className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-mono text-lg"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Shop Area (sq ft) *</label>
        <input
          type="text"
          value={formData.areaSize}
          onChange={(e) => updateForm({ areaSize: e.target.value.replace(/[^0-9]/g, "") })}
          placeholder="450"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-mono text-lg"
        />
      </div>

      <div className="flex items-center gap-3 p-4 rounded-xl border border-border">
        <input
          type="checkbox"
          id="negotiable"
          checked={formData.negotiable}
          onChange={(e) => updateForm({ negotiable: e.target.checked })}
          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
        />
        <label htmlFor="negotiable" className="text-sm text-foreground cursor-pointer">
          Rent is negotiable
        </label>
      </div>

      {/* Price insight */}
      {formData.monthlyRent && formData.areaSize && (
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
          <p className="text-sm font-medium text-foreground">💡 Price Insight</p>
          <p className="text-sm text-muted-foreground mt-1">
            That's <span className="font-mono font-semibold text-primary">₹{Math.round(Number(formData.monthlyRent) / Number(formData.areaSize))}</span> per sq ft/month
            {formData.city && ` in ${formData.city}`}. Market average is ₹25–₹80/sq ft.
          </p>
        </div>
      )}
    </div>
  </div>
);

export default ListingStepPricing;
