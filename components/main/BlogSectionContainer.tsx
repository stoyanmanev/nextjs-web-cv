import { Row, Col } from "react-bootstrap";
import { User } from "../../interfaces/User";
import BlogList from "./BlogList";

interface Props {
  user: User;
}

const BlogSectionContainer: React.FC<Props> = ({ user }) => {
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
                  {user.blog && <BlogList user={user} />}
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
