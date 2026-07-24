import { Suspense, lazy } from "react";
import { Hero } from "./components/hero/Hero";
import { ComparisonSlider } from "./components/comparison-slider/ComparisonSlider";
import { ProgramConstructor } from "./components/program-constructor/ProgramConstructor";
import { FloatingSummary } from "./components/floating-summary/FloatingSummary";
import { FloatingNav } from "./components/floating-nav/FloatingNav";
import { ScrollToTopButton } from "./components/scroll-to-top-button/ScrollToTopButton";

const ClinicMap = lazy(() => import("./components/clinic-map/ClinicMap"));
const Doctors = lazy(() => import("./components/doctors/Doctors"));
const Reviews = lazy(() => import("./components/reviews/Reviews"));
const LeadForm = lazy(() => import("./components/lead-form/LeadForm"));
const FAQ = lazy(() => import("./components/faq/FAQ"));

function SectionSkeleton() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-10 h-10 border-4 border-mint-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const App = () => {
  return (
    <div className="bg-soft-peach text-graphite selection:bg-mint-400/30">
      <FloatingNav />
      <Hero />
      <ComparisonSlider />
      <ProgramConstructor />
      <Suspense fallback={<SectionSkeleton />}>
        <ClinicMap />
        <Doctors />
        <Reviews />
        <LeadForm />
        <FAQ />
      </Suspense>
      <FloatingSummary />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
