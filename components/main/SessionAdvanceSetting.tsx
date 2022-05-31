import { User } from "../../generated/graphql";
import { useState } from "react";
import SettingsPortfolioList from "./SettingsPorfolioList";

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
    </>
  );
};

export default SessionAdvanceSetting;
