import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faClock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { News, User, useUserQuery } from "../../generated/graphql";
import { useEffect, useState } from "react";
import Loader from "../LoaderContainer";

interface Props {
  user: User;
  news: News;
  setIsViewNews: (type: boolean) => void;
}

const BlogNews: React.FC<Props> = ({ user, news, setIsViewNews }) => {
  const [userCreated, setUserCreated] = useState<any>();
  const { isError, isLoading, data } = useUserQuery(
    { id: news.createdBy },
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data?.user) {
      setUserCreated(data.user);
    }
  }, [data]);

  const createdUsername = () => {
    if (isLoading) return <Loader />;
    if (isError) return <>Something went wrong</>;
    if (userCreated) return <>{userCreated.fullname}</>;
  };

  return (
    <article className="post">
      <div className="return-btn">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => setIsViewNews(false)}
        />
      </div>
      <div className="post-thumbnail">
        <img width={760} height={366} src={news.image} alt="image" />
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
              <FontAwesomeIcon icon={faClock} />{" "}
              <span className="entry-date">
                {new Date(Number(news.date)).toDateString()}
              </span>
            </span>
            <span className="author vcard">
              {" "}
              <FontAwesomeIcon icon={faUser} /> {createdUsername()}
            </span>
          </div>

          <div className="entry-share btn-group share-buttons">
            {userCreated?.facebook && (
              <a
                href={userCreated.facebook}
                title={`Follow ${userCreated.fullname} on Facebook`}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            )}

            {userCreated?.github && (
              <a
                href={userCreated.github}
                title={`Follow ${userCreated.fullname} on Github`}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}

            {userCreated?.twitter && (
              <a
                href={userCreated.twitter}
                title={`Follow ${userCreated.fullname} on Twitter`}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            )}

            {userCreated?.linkedin && (
              <a
                href={userCreated.linkedin}
                title={`Follow ${userCreated.fullname} on LinkedIn`}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            )}
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
