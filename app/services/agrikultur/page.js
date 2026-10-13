import { agrikulturData } from "./data";
import ServiceDetailView from "@/components/ServiceDetailView";

export const metadata = {
  title: `${agrikulturData.title} - ${agrikulturData.headline} | Mechatron Services`,
  description: agrikulturData.description,
};

export default function AgrikulturPage() {
  return <ServiceDetailView service={agrikulturData} />;
}
