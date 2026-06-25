import Banner from "@/components/Banner";
import HealthPackages from "@/components/HealthPackages";
import ServicesCards from "@/components/ServicesCards";
import StatSection from "@/components/StatSection";
import TopRatedDoctors from "@/components/TopRatedDoctors";

export const metadata = {
  title: "Alpha | Home",
  description: "This is Homepage",
};

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ServicesCards></ServicesCards>
      <StatSection></StatSection>
      <TopRatedDoctors></TopRatedDoctors>
      <HealthPackages></HealthPackages>
    </div>
  );
}
