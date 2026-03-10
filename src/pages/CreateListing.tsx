import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Store } from "lucide-react";
import { Link } from "react-router-dom";
import ListingStepBasic from "@/components/listing/ListingStepBasic";
import ListingStepLocation from "@/components/listing/ListingStepLocation";
import ListingStepPhotos from "@/components/listing/ListingStepPhotos";
import ListingStepPricing from "@/components/listing/ListingStepPricing";
import ListingStepAmenities from "@/components/listing/ListingStepAmenities";
import ListingStepReview from "@/components/listing/ListingStepReview";
import { toast } from "sonner";

export interface ListingFormData {
  title: string;
  description: string;
  shopType: string;
  suitableFor: string[];
  city: string;
  area: string;
  address: string;
  floor: string;
  photos: string[];
  videoUrl: string;
  monthlyRent: string;
  securityDeposit: string;
  areaSize: string;
  negotiable: boolean;
  amenities: string[];
}

const initialFormData: ListingFormData = {
  title: "",
  description: "",
  shopType: "",
  suitableFor: [],
  city: "",
  area: "",
  address: "",
  floor: "",
  photos: [],
  videoUrl: "",
  monthlyRent: "",
  securityDeposit: "",
  areaSize: "",
  negotiable: false,
  amenities: [],
};

const steps = [
  { id: 1, label: "Basic Info", icon: "📋" },
  { id: 2, label: "Location", icon: "📍" },
  { id: 3, label: "Photos", icon: "📸" },
  { id: 4, label: "Pricing", icon: "💰" },
  { id: 5, label: "Amenities", icon: "✨" },
  { id: 6, label: "Review", icon: "✅" },
];

const CreateListing = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ListingFormData>(initialFormData);

  const updateForm = (updates: Partial<ListingFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = () => {
    toast.success("Your shop listing has been submitted for review!", {
      description: "You'll receive a notification once it's approved.",
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <ListingStepBasic formData={formData} updateForm={updateForm} />;
      case 2: return <ListingStepLocation formData={formData} updateForm={updateForm} />;
      case 3: return <ListingStepPhotos formData={formData} updateForm={updateForm} />;
      case 4: return <ListingStepPricing formData={formData} updateForm={updateForm} />;
      case 5: return <ListingStepAmenities formData={formData} updateForm={updateForm} />;
      case 6: return <ListingStepReview formData={formData} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-border/30">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <Store className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground tracking-tight">
              Shop<span className="text-gradient-primary">Lease</span>
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm">Cancel</Button>
          </Link>
        </div>
      </header>

      <div className="container max-w-3xl py-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            List Your Shop
          </h1>
          <p className="text-muted-foreground mt-1">
            Fill in the details to create your shop listing.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => step.id < currentStep && setCurrentStep(step.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  step.id === currentStep
                    ? "bg-primary text-primary-foreground"
                    : step.id < currentStep
                    ? "bg-primary/10 text-primary cursor-pointer"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <span>{step.id < currentStep ? "✓" : step.icon}</span>
                <span className="hidden sm:inline">{step.label}</span>
              </button>
              {i < steps.length - 1 && (
                <div className={`w-6 h-0.5 mx-1 ${step.id < currentStep ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>

          {currentStep < steps.length ? (
            <Button variant="cta" onClick={handleNext} className="gap-2">
              Next <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button variant="cta" onClick={handleSubmit} className="gap-2">
              <Check className="w-4 h-4" /> Submit Listing
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
