import { User } from "../../generated/graphql";
import {Row, Col} from 'react-bootstrap'
import SettingsProfileImage from "./SettingsProfileImage";
import SettingsMainSettings from "./SettingsMainSettings";
import SettingsAdvanceSettings from "./SessionAdvanceSetting";

interface Props{
    user: User;
    setUser: (type: User) => void
}

const SettingsContainer: React.FC<Props> = ({user, setUser}) => {

    return (
        <div data-id="settings" className="animated-section section-active">
      <Row>
        <Col lg={12}>
          <div className="page-title">
            <h2>Settings</h2>
          </div>
        </Col>
        <Col lg={7}>
          <SettingsMainSettings user={user} setUser={setUser}/>
        </Col>
        <Col lg={5}>
          <SettingsProfileImage user={user} setUser={setUser}/>
        </Col>
        <Col lg={12}>
          <SettingsAdvanceSettings user={user} setUser={setUser} />
        </Col>
      </Row>
    </div>
    )

}
export default SettingsContainer;