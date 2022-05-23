import { User } from "../../interfaces/User";
import { News } from "../../interfaces/News";
import { useState } from "react";
import Image from "next/image";
import BlogNews from "./BlogNews";
import BlogItemCreate from "./BlogItemCreate";
import BlogCreateNews from "./BlogCreateNews";

interface Props {
  user: User;
}

const BlogList: React.FC<Props> = ({ user }) => {
  const [isViewNews, setIsViewNews] = useState<Boolean>(false);
  const [activeNews, setActiveNews] = useState<News>({
    category: "",
    date: "",
    title: "",
    description: "",
    image: "",
    createdBy: ""
  });
  const [isCreateNews, setIsCreateNews] = useState<Boolean>(false);

  async function setNews(news: News){
    await setActiveNews(news)
    return setIsViewNews(true);
  }

  if(isCreateNews){
    return <BlogCreateNews user={user} />
  }

  if (isViewNews) {
    return <BlogNews news={activeNews} setIsViewNews={setIsViewNews}/>;
  }

  if (user.blog && user.blog.length > 0) {
    return (
      <>
        {user.blog.map((news, i) => {
          return (
            <div key={i} className="item post-1">
              <div className="blog-card">
                <div className="media-block">
                  <div className="category">
                    {news.category && (
                      <span className="news-category">{news.category}</span>
                    )}
                  </div>
                  <a href="#" onClick={() => setNews(news)}>
                    {news.image && (
                      <Image
                        src={news.image}
                        className="size-blog-masonry-image-two-c"
                        alt="Why I Switched to Sketch For UI Design"
                        width={375}
                        height={176}
                      />
                    )}
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="post-info">
                  {news.date && <div className="post-date">{news.date}</div>}
                  <a href="blog-post-1.html">
                    {news.title && (
                      <h4 className="blog-item-title">{news.title}</h4>
                    )}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <BlogItemCreate setIsCreateNews={setIsCreateNews}/>
      </>
    );
  }

  return (
    <div className="item post-1 no-found-news">
      <div className="blog-card">
        <div className="media-block"></div>
        <div className="post-info">
          <div className="post-date"></div>
          <h4 className="blog-item-title">We could not find any news</h4>
        </div>
      </div>
      <BlogItemCreate setIsCreateNews={setIsCreateNews}/>
    </div>
  );
};

export default BlogList;
