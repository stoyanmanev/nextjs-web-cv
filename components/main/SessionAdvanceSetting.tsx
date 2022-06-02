import { User } from "../../generated/graphql";
import { useState } from "react";
import SettingsPortfolioList from "./SettingsPorfolioList";
import SettingsGoogleIframe from "./SettingsGoogleIframe";
import SettingsForm from "./SettingsForm";
import EditableFieldTextArea from "../EditableFieldTextArea";
import SettingsFactsContainer from "./SettingsFactsContainer";

interface Props {
  user: User;
  setUser: (type: User) => void;
  refetch: () => void
}

const SessionAdvanceSetting: React.FC<Props> = ({ user, setUser, refetch }) => {
  const [editableAreaBio, setEditableAreaBio] = useState(false);
  const [profileBio, setProfileBio] = useState(user.description);

  const editableInput = (
    prop: any,
    type: string,
    setProp: (type: string) => void,
    setPropArea: (type: boolean) => void
  ) => {
    return (
      <EditableFieldTextArea
        prop={prop}
        type={type}
        userId={user._id}
        setProp={setProp}
        setPropArea={setPropArea}
        setUser={setUser}
      />
    );
  };

  const notEditable = (
    prop: any,
    setPropArea: (type: boolean) => void,
    type?: string
  ) => {
    return (
      <div>
        <a
          href="/set"
          onClick={(e) => {
            e.preventDefault();
            return setPropArea(true);
          }}
          title={prop ? prop : "set value"}
        >
          {prop ? prop : <>set value</>}
        </a>
      </div>
    );
  };

  return (
    <>
      <div className="setting-type portfolio-edit">
        <span className="setting-block-settings">Portfolio Settings</span>
        <SettingsPortfolioList user={user} />
      </div>
      <div className="setting-type">
        <span className="me-3">Google Iframe: </span>
        <SettingsGoogleIframe user={user} setUser={setUser} />
      </div>
      <div className="setting-type">
        <span className="me-3">Contact Form: </span>
        <SettingsForm user={user} setUser={setUser} />
      </div>
      <div className="setting-type">
        <span className="me-3">Bio: </span>
        {!editableAreaBio
          ? notEditable(profileBio, setEditableAreaBio)
          : editableInput(
              profileBio,
              "description",
              setProfileBio,
              setEditableAreaBio
            )}
      </div>
      <div className="setting-type fact-edit">
        <span className="setting-block-settings">Facts</span>
        <SettingsFactsContainer user={user} refetch={refetch}/>
      </div>
    </>
  );
};

export default SessionAdvanceSetting;
