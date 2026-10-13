import { fotografiData } from "./data";
import ServiceDetailView from "@/components/ServiceDetailView";

export const metadata = {
  title: `${fotografiData.title} - ${fotografiData.headline} | Mechatron Services`,
  description: fotografiData.description,
};

export default function FotografiPage() {
  return <ServiceDetailView service={fotografiData} />;
}
