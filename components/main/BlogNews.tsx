import { News } from "../../interfaces/News";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

interface Props {
  news: News
  setIsViewNews: (type: boolean) => void
}

const BlogNews: React.FC<Props> = ({ news, setIsViewNews}) => {
  return (
    <article className="post">
        <div className="return-btn">
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => setIsViewNews(false)}/>
        </div>
      <div className="post-thumbnail">
        <Image width={760} height={366} src={news.image} alt="image" />
      </div>

      <div className="post-content">
        <header className="entry-header">
          <div className="entry-meta entry-meta-top">
            <span>
              <a href="#" rel="category tag">
                {news.category}
              </a>
            </span>
          </div>

          <h2 className="entry-title">{news.title}</h2>
        </header>

        <div className="entry-content">
          <div className="row">
            <div className=" col-xs-12 col-sm-12 ">
              <div className="col-inner">
                <p>{news.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="entry-meta entry-meta-bottom">
          <div className="date-author">
            <span className="entry-date">
              <a href="#" rel="bookmark">
                <i className="far fa-clock"></i>{" "}
                <span className="entry-date">{news.date}</span>
              </a>
            </span>
            <span className="author vcard">
              <a className="url fn n" href="#" rel="author">
                {" "}
                <i className="fas fa-user"></i> {news.createdBy}
              </a>
            </span>
          </div>

          <div className="entry-share btn-group share-buttons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a href="#">
              <i className="fab fa-twitter"></i>
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        <div className="post-tags">
          <div className="tags">
            {news.keywords?.map((word, i) => {
              return (
                <a key={i} href="#" rel="tag">
                  {word}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogNews;
