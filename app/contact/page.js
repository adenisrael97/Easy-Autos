import ContactForm from "@/components/Contact/Contactform";
import Herocontact from "@/components/Contact/Herocontact";
import Map from "@/components/Contact/Map";

export const metadata = {
  title: "Contact | Easy Autos",
  description:
    "Get in touch with Easy Autos — visit our Lagos showroom, call, email, or chat on WhatsApp.",
};

export default function ContactPage() {
  return (
    <main>
      <Herocontact />
      <ContactForm />
      <Map />
    </main>
  );
}
