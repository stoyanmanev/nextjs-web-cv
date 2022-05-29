import { User } from "../../generated/graphql";
import {Row, Col} from 'react-bootstrap'
import SettingsProfileImage from "./SettingsProfileImage";

interface Props{
    user: User;
}

const SettingsContainer: React.FC<Props> = ({user}) => {

    return (
        <div data-id="settings" className="animated-section section-active">
      <Row>
        <Col lg={12}>
          <div className="page-title">
            <h2>Settings</h2>
          </div>
        </Col>
        <Col lg={12}>
          <SettingsProfileImage user={user} />
        </Col>
      </Row>
    </div>
    )

}
export default SettingsContainer;