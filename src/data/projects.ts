import godrejBrochure from "@/assets/brochures/godrejReserve.pdf";
import godrejSkyshore from "@/assets/brochures/godrejSkyshore.pdf";
import godrejSkyshore1 from "@/assets/godrejSkyshore1.jpg";
import godrejSkyshore2 from "@/assets/godrejSkyshore2.jpg";
import godrejSkyshore3 from "@/assets/godrejSkyshore3.jpg";
import godrejReserve1 from "@/assets/godrejReserve1.jpg";
import godrejReserve2 from "@/assets/godrejReserve2.jpg";
import godrejReserve3 from "@/assets/godrejReserve3.jpg";
import godrejReserve4 from "@/assets/godrejReserve4.jpg";
import godrejReserve5 from "@/assets/godrejReserve5.jpg";

export const projects = [
  {
    slug: "godrej-horizon",
    developer: "Godrej Properties",
    name: "Godrej Horizon",
    location: "Kandivali, Mumbai",
    price: "₹ 9.06 - 15.2 Cr",
    status: "New Launch",
    possession: "2028",
    configuration: "2 • 3 • 4 BHK",
    image: godrejReserve1,
    description: "...",
    gallery: [godrejReserve2, godrejReserve3, godrejReserve4, godrejReserve5],
    brochure: godrejBrochure,
  },
  {
    slug: "godrej-skyshore",
    developer: "Godrej Properties",
    name: "Godrej Skyshore",
    location: "Versova, Mumbai",
    price: "₹ 2.76 - 9.4 Cr",
    status: "New Launch",
    possession: "2028",
    configuration: "2 • 3 • 4 BHK",
    image: godrejSkyshore1,
    description: "...",
    gallery: [godrejSkyshore2, godrejSkyshore3],
    brochure: godrejSkyshore,
  },
];