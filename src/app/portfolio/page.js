import GlassmorphismGrid from "@/Components/GlassmorphismGrid";
import Our_projects from "@/Components/OurProjects";
import PortfolioHead from "@/Components/PortfolioHead";
import TechnologyPort from "@/Components/TechnologyPort";


export default function page() {
  return (
    <>
    <PortfolioHead/>
    <TechnologyPort/>
    <GlassmorphismGrid/>
    <Our_projects showAll={true}/>
    </>
  )
}
