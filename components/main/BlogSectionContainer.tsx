import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { News, useNewsesQuery, User } from "../../generated/graphql";
import Loader from "../LoaderContainer";
import BlogList from "./BlogList";

interface Props {
  user: User;
}

const BlogSectionContainer: React.FC<Props> = ({ user }) => {
  const [blog, setBlog] = useState<any>();
  const { isError, error, isLoading, data, refetch } = useNewsesQuery(
    {},
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data?.newses) {
      setBlog(data.newses);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (isError) {
    return (
      <div>
        <span>We were unable to load blog news</span>
      </div>
    );
  }
  return (
    <div data-id="blog" className="animated-section section-active">
      <Row>
        <Col lg={12}>
          <div className="page-title">
            <h2>Blog</h2>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={12}>
          <div className="section-content">
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="blog-masonry two-columns clearfix">
                  {blog && <BlogList user={user} blog={blog} setBlog={setBlog} refetch={refetch}/>}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogSectionContainer;
