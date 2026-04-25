import InventoryClient from "@/components/Inventory/InventoryClient";

export const metadata = {
  title: "Inventory | Easy Autos",
  description: "Browse Easy Autos' full inventory of premium vehicles — Toyota, Mercedes, Lexus, BMW, Honda and more.",
};

export default function InventoryPage() {
  return (
    <main>
      <InventoryClient />
    </main>
  );
}
