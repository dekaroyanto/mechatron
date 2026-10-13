import { perawatanDroneData } from "./data";
import ServiceDetailView from "@/components/ServiceDetailView";

export const metadata = {
  title: `${perawatanDroneData.title} - ${perawatanDroneData.headline} | Mechatron Services`,
  description: perawatanDroneData.description,
};

export default function PerawatanDronePage() {
  return <ServiceDetailView service={perawatanDroneData} />;
}
