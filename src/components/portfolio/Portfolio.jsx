import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, selectedData] = useState([]);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web" },
    { id: "mobile", title: "Mobile" },
    { id: "design", title: "Design" },
    { id: "brand", title: "Branding" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        selectedData(featuredPortfolio);
        break;
      case "web":
        selectedData(webPortfolio);
        break;
      case "mobile":
        selectedData(mobilePortfolio);
        break;
      case "design":
        selectedData(designPortfolio);
        break;
      case "brand":
        selectedData(contentPortfolio);
        break;
      default:
        selectedData(featuredPortfolio);
        break;
    }

  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            id={item.id}
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setActive={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => 
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
