import { User } from "../../generated/graphql";
import { useState } from "react";
import SettingsPortfolioList from "./SettingsPorfolioList";
import SettingsGoogleIframe from "./SettingsGoogleIframe";
import SettingsForm from "./SettingsForm";

interface Props {
  user: User;
  setUser: (type: User) => void;
}

const SessionAdvanceSetting: React.FC<Props> = ({ user, setUser }) => {
  return (
    <>
      <div className="setting-type portfolio-edit">
        <span className="setting-block-settings">Portfolio Settings</span>
        <SettingsPortfolioList user={user} />
      </div>
      <div className="setting-type">
        <span className="me-3">Google Iframe: </span>
        <SettingsGoogleIframe user={user} setUser={setUser}/>
      </div>
      <div className="setting-type">
        <span className="me-3">Contact Form: </span>
        <SettingsForm user={user} setUser={setUser}/>
      </div>
    </>
  );
};

export default SessionAdvanceSetting;
