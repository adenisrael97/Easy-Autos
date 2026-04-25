import HeroAbout from "@/components/About/HeroAbout";
import ValueAbout from "@/components/About/ValueAbout";

export const metadata = {
  title: "About | Easy Autos",
  description:
    "About Easy Autos — built on trust, driven by passion. Meet the team and the values behind our showroom.",
};

export default function AboutPage() {
  return (
    <main>
      <HeroAbout />
      <ValueAbout />
    </main>
  );
}
