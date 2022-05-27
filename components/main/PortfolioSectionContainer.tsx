import Image from "next/image";
import { Portfolio } from "../../interfaces/Portfolio";

interface Props {
  portfolio: Portfolio[];
}

const PortfolioSectionContainer: React.FC<Props> = ({ portfolio }) => {
  if (portfolio.length === 0) {
    return (
      <div data-id="portfolio" className="animated-section section-active">
        <div className="page-title">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio-content no-items-portfolio">
          <h4>We did not find any items in your portfolio</h4>
        </div>
      </div>
    );
  }

  return (
    <div data-id="portfolio" className="animated-section section-active">
      <div className="page-title">
        <h2>Portfolio</h2>
      </div>
      {portfolio.length > 0 && (
        <>
          {portfolio.map((item, i) => {
            return (
              <div key={i} className="portfolio-content">
                <div className="portfolio-grid three-columns shuffle">
                  <figure className="item lbaudio shuffle-item filtered">
                    <div className="portfolio-item-img">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={251}
                        height={251}
                      />
                      <a
                        href={item.link}
                        className="lightbox mfp-iframe"
                        target="_blank"
                        rel="noreferrer"
                        title={item.name}
                      ></a>
                    </div>

                    <i className="fa fa-volume-up"></i>
                    <h4 className="name">{item.name}</h4>
                    <span className="category">{item.category}</span>
                  </figure>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default PortfolioSectionContainer;
