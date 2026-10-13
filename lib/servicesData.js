import { agrikulturData } from "@/app/services/agrikultur/data";
import { fotografiData } from "@/app/services/fotografi/data";
import { lidarData } from "@/app/services/lidar/data";
import { sewaDroneData } from "@/app/services/sewadrone/data";
import { pelatihanPilotData } from "@/app/services/pelatihanpilot/data";
import { perawatanDroneData } from "@/app/services/perawatandrone/data";

export const allServices = [
  agrikulturData,
  fotografiData,
  lidarData,
  sewaDroneData,
  pelatihanPilotData,
  perawatanDroneData,
];

export {
  agrikulturData,
  fotografiData,
  lidarData,
  sewaDroneData,
  pelatihanPilotData,
  perawatanDroneData,
};

export function getServiceBySlug(slug) {
  // Support both hyphenated or unhyphenated slugs
  const normalized = slug ? slug.replace(/-/g, "").toLowerCase() : "";
  return allServices.find(
    (s) =>
      s.slug === slug ||
      s.id === slug ||
      s.slug.replace(/-/g, "").toLowerCase() === normalized ||
      s.id.replace(/-/g, "").toLowerCase() === normalized,
  );
}

export default allServices;
