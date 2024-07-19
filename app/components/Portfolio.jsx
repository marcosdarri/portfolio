import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div
      className="hero bg-base-200 min-h-screen dark:bg-slate-800"
      id="portfolio"
    >
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
