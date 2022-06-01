import { useState } from "react";
import { User } from "../../generated/graphql";
import EditableFieldContainer from "../EditableFieldContainer";

interface Props {
  user: User;
  setUser: (type: User) => void
}

const SettingsGoogleIframe: React.FC<Props> = ({ user, setUser }) => {
  const [editableAreaGoogleIframe, setEditableAreaGoogleIframe] =
    useState(false);
  const [profileGoogleIframe, setProfileGoogleIframe] = useState(
    user.googleIframe
  );

  const editableInput = (
    prop: any,
    type: string,
    setProp: (type: string) => void,
    setPropArea: (type: boolean) => void
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
    if (!prop) {
      return (
        <div>
          <a
            href="/set"
            onClick={(e) => {
              e.preventDefault();
              return setPropArea(true);
            }}
            title="set value"
          >
            Disabled
          </a>
        </div>
      );
    }
    return (
      <div>
        <a
          href="/set"
          className={`${type !== undefined ? `${type}-field` : ""}`}
          onClick={(e) => {
            e.preventDefault();
            return setPropArea(true);
          }}
          title={prop}
        >
          {prop && <>Enabled</>}
        </a>
      </div>
    );
  };

  return (
    <>
      {!editableAreaGoogleIframe
        ? notEditable(profileGoogleIframe, setEditableAreaGoogleIframe)
        : editableInput(
            profileGoogleIframe,
            "googleIframe",
            setProfileGoogleIframe,
            setEditableAreaGoogleIframe
          )}
    </>
  );
};

export default SettingsGoogleIframe;

// https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.22995681631!2d24.7600977!3d42.1453657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1a0ea5423df%3A0xc67bc07450fea7f0!2z0YPQuy4g4oCe0JjQu9Cw0YDQuNC-0L0g0JzQsNC60LDRgNC40L7Qv9C-0LvRgdC60LjigJwgMSwgNDAwMCDQmtCw0LzQtdC90LjRhtCwIDEsINCf0LvQvtCy0LTQuNCy!5e0!3m2!1sbg!2sbg!4v1653239024584!5m2!1sbg!2sbg