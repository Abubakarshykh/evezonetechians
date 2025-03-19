import Arrow from "@/Components/Arrow";
import GlassmorphismGrid from "@/Components/GlassmorphismGrid";
import Our_projects from "@/Components/OurProjects";
import PortfolioHead from "@/Components/PortfolioHead";
import TechnologyPort from "@/Components/TechnologyPort";


export default function page() {
  return (
    <>
    <div className="bg-[#222222]">
    <PortfolioHead/>
    <Arrow />
    <TechnologyPort/>
    <GlassmorphismGrid/>
    <Our_projects showAll={true}/>
    </div>
    </>
  )
}
