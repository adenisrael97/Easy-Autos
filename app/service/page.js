import IntroService from "@/components/Service/IntroService";
import SummaryService from "@/components/Service/SummaryService";

export const metadata = {
  title: "Service | Easy Autos",
  description:
    "Easy Autos service centre — repairs, inspections, detailing, financing and customer support.",
};

export default function ServicePage() {
  return (
    <main className="min-h-screen w-full bg-page">
      <IntroService />
      <SummaryService />
    </main>
  );
}
