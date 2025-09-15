import PortfolioHero from "@/components/PortfolioHero";
import PortfolioProjects from "@/components/PortfolioProjects";
import PortfolioSkills from "@/components/PortfolioSkills";
import PortfolioContact from "@/components/PortfolioContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <PortfolioProjects />
      <PortfolioSkills />
      <PortfolioContact />
    </div>
  );
};

export default Index;
