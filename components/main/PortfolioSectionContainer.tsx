import Image from "next/image";
import {useState, useEffect} from 'react'
import { usePortfoliosQuery } from "../../generated/graphql";

interface Props {
  userID: string;
}

const PortfolioSectionContainer: React.FC<Props> = ({ userID }) => {

  const [userPortfolioList, setUserPortfolioList] = useState<any>(); // QuickFix: any will be type Portfolio[]
  const { isLoading, isError, data, error, refetch } = usePortfoliosQuery(
    {},
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    const portfioFilteredList = data?.portfolios.filter(
      ({ createdBy }) => createdBy === userID
    );
    setUserPortfolioList(portfioFilteredList);
  }, [data]);

  if (userPortfolioList?.length === 0) {
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
      {userPortfolioList?.length > 0 && (
        <>
          {userPortfolioList.map((item: any, i: number) => {
            return (
              <div key={i} className="portfolio-content">
                <div className="portfolio-grid three-columns shuffle">
                  <figure className="item lbaudio shuffle-item filtered">
                    <div className="portfolio-item-img">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
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
