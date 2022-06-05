import { useState } from "react";
import { User } from "../../generated/graphql";
import EditableFieldContainer from "../EditableFieldContainer";

interface Props {
  user: User;
  setUser: (type: User) => void
}

const SessionSocialSettings: React.FC<Props> = ({ user, setUser }) => {

    const [editableAreaFacebook, setEditableAreaFacebook] = useState(false);
    const [profileFacebook, setProfileFacebook] = useState(user.facebook);

    const [editableAreaLinkedIn, setEditableAreaLinkedIn] = useState(false);
    const [profileLinkedIn, setProfileLinkedIn] = useState(user.linkedin);

    const [editableAreaGitHub, setEditableAreaGitHub] = useState(false);
    const [profileGitHub, setProfileGitHub] = useState(user.github);

    const [editableAreaTwitter, setEditableAreaTwitter] = useState(false);
    const [profileTwitter, setProfileTwitter] = useState(user.twitter);
  
    const editableInput = (
      prop: any,
      type: string,
      setProp: (type: string) => void,
      setPropArea: (type: boolean) => void,
    ) => {  
      return (
        <EditableFieldContainer
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
      <div className="setting-type">
        <span className="me-3">Facebook: </span>
        {!editableAreaFacebook
          ? notEditable(profileFacebook, setEditableAreaFacebook)
          : editableInput(
              profileFacebook,
              "facebook",
              setProfileFacebook,
              setEditableAreaFacebook
            )}
      </div>
      <div className="setting-type">
        <span className="me-3">Twitter: </span>
        {!editableAreaTwitter
          ? notEditable(profileTwitter, setEditableAreaTwitter)
          : editableInput(
              profileTwitter,
              "twitter",
              setProfileTwitter,
              setEditableAreaTwitter
            )}
      </div>
      <div className="setting-type">
        <span className="me-3">Linkedin: </span>
        {!editableAreaLinkedIn
          ? notEditable(profileLinkedIn, setEditableAreaLinkedIn)
          : editableInput(
              profileLinkedIn,
              "linkedin",
              setProfileLinkedIn,
              setEditableAreaLinkedIn
            )}
      </div>
      <div className="setting-type">
        <span className="me-3">GitHub: </span>
        {!editableAreaGitHub
          ? notEditable(profileGitHub, setEditableAreaGitHub)
          : editableInput(
              profileGitHub,
              "github",
              setProfileGitHub,
              setEditableAreaGitHub
            )}
      </div>
    </>
  );
};

export default SessionSocialSettings;
