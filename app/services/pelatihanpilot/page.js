import { pelatihanPilotData } from "./data";
import ServiceDetailView from "@/components/ServiceDetailView";

export const metadata = {
  title: `${pelatihanPilotData.title} - ${pelatihanPilotData.headline} | Mechatron Services`,
  description: pelatihanPilotData.description,
};

export default function PelatihanPilotPage() {
  return <ServiceDetailView service={pelatihanPilotData} />;
}
