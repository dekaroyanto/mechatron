import { sewaDroneData } from "./data";
import ServiceDetailView from "@/components/ServiceDetailView";

export const metadata = {
  title: `${sewaDroneData.title} - ${sewaDroneData.headline} | Mechatron Services`,
  description: sewaDroneData.description,
};

export default function SewaDronePage() {
  return <ServiceDetailView service={sewaDroneData} />;
}
