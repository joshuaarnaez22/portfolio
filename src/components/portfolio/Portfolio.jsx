import "./portfolio.scss";
function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <div className="container">
      <a href="https://netflix-build-clone-6a7cb.web.app/" rel="noreferrer" target="_blank">
          <div  className="item">
              <img src="assets/netflix.png" alt="" />
            <h3>Netflix Clone</h3>
            <p>React,movie API,firebase, redux</p>
          </div>
          </a>
          <a href="https://airbnb-react-ten.vercel.app/" rel="noreferrer" target="_blank">
          <div className="item">
            <img src="assets/airbnb.png" alt="" />
            <h3>Airbnb Clone</h3>
            <p>React,Nextjs,Mapbox,Tailwindcss</p>
          </div>
          </a>
      </div>
    </div>
  );
}

export default Portfolio;
