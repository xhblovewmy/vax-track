import { useState } from "react";
import WorldMap from "./components/WorldMap";
import "@/app/globals.css";
export default function Page() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div>
      <WorldMap />
    </div>
  );
}
