import { useState } from "react";
import { Upload, X, Film } from "lucide-react";
import type { ListingFormData } from "@/pages/CreateListing";

interface Props {
  formData: ListingFormData;
  updateForm: (updates: Partial<ListingFormData>) => void;
}

const samplePhotos = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=300&h=200&fit=crop",
];

const ListingStepPhotos = ({ formData, updateForm }: Props) => {
  const [dragActive, setDragActive] = useState(false);

  const addSamplePhoto = (url: string) => {
    if (!formData.photos.includes(url)) {
      updateForm({ photos: [...formData.photos, url] });
    }
  };

  const removePhoto = (url: string) => {
    updateForm({ photos: formData.photos.filter((p) => p !== url) });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-heading font-semibold text-foreground mb-1">Photos & Media</h2>
        <p className="text-sm text-muted-foreground">Upload photos of your shop. Listings with photos get 5x more views.</p>
      </div>

      {/* Upload area */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
          dragActive
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/30"
        }`}
      >
        <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
        <p className="font-medium text-foreground">Drag and drop photos here</p>
        <p className="text-sm text-muted-foreground mt-1">or click to browse • JPG, PNG up to 10MB</p>
        <p className="text-xs text-muted-foreground mt-3">
          Photo upload requires backend storage — for now, try sample photos below.
        </p>
      </div>

      {/* Sample photos */}
      <div>
        <p className="text-sm font-medium text-foreground mb-2">Try sample photos:</p>
        <div className="flex gap-2">
          {samplePhotos.map((url) => (
            <button
              key={url}
              onClick={() => addSamplePhoto(url)}
              className="rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all opacity-70 hover:opacity-100"
            >
              <img src={url} alt="Sample" className="w-24 h-16 object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Photo grid */}
      {formData.photos.length > 0 && (
        <div>
          <p className="text-sm font-medium text-foreground mb-2">
            Selected Photos ({formData.photos.length})
          </p>
          <div className="grid grid-cols-3 gap-3">
            {formData.photos.map((url, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden group aspect-video">
                <img src={url} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                <button
                  onClick={() => removePhoto(url)}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3" />
                </button>
                {i === 0 && (
                  <span className="absolute bottom-2 left-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                    Cover
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Video */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
          <Film className="w-4 h-4" /> Video Walkthrough (optional)
        </label>
        <input
          type="text"
          value={formData.videoUrl}
          onChange={(e) => updateForm({ videoUrl: e.target.value })}
          placeholder="Paste YouTube or video link"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>
    </div>
  );
};

export default ListingStepPhotos;
