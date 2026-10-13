import { lidarData } from "./data";
import ServiceDetailView from "@/components/ServiceDetailView";

export const metadata = {
  title: `${lidarData.title} - ${lidarData.headline} | Mechatron Services`,
  description: lidarData.description,
};

export default function LidarPage() {
  return <ServiceDetailView service={lidarData} />;
}
