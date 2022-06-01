import { MouseEvent, useState } from "react";
import { toast } from "react-toastify";
import { useEditUserMutation, User } from "../../generated/graphql";

interface Props {
  user: User;
  setUser: (type: User) => void;
}

const SettingsForm: React.FC<Props> = ({ user, setUser }) => {
  const [editableAreaForm, setEditableAreaForm] = useState(false);
  const [profileForm, setProfileForm] = useState(user.form);

  const { mutate } = useEditUserMutation({
    onSuccess: (data) => {
        toast.info(`Profile updated!`);
        const userData: any = data?.editUser; // QuickFix: type any to be type User
        setProfileForm(!profileForm);
        setUser(userData);
      },
      onError: (err: any) => {
        const errorMsg = String(err).split(":")[1];
        toast.error(`${errorMsg}`);
      },
  });

  const handleSwitchForm = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    mutate({id: user._id, data:{form: !profileForm}})
  };

  return (
    <a
      href="/set"
      onClick={(e) => handleSwitchForm(e)}
      title={`Form is ${profileForm ? "Enabled" : "Disabled"}`}
    >
      {profileForm ? <>Enabled</> : <>Disabled</>}
    </a>
  );
};

export default SettingsForm;
