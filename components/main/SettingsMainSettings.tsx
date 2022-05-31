import { User } from "../../generated/graphql";
import { useState } from "react";
import EditableFieldContainer from "../EditableFieldContainer"

interface Props {
    user: User
    setUser: (type: User) => void
}

const SettingsMainSettings: React.FC<Props> = ({user, setUser}) => {

    const [editableAreaFullname, setEditableAreaFullname] = useState(false);
    const [profileFullname, setProfileFullname] = useState(user.fullname);

    const [editableAreaEmail, setEditableAreaEmail] = useState(false);
    const [profileEmail, setProfileEmail] = useState(user.email);

    const [editableAreaPassword, setEditableAreaPassword] = useState(false);
    const [profilePassword, setProfilePassword] = useState(user.password);

    const [editableAreaAge, setEditableAreaAge] = useState(false);
    const [profileAge, setProfileAge] = useState(user.age);

    const [editableAreaAddress, setEditableAreaAddress] = useState(false);
    const [profileAddress, setProfileAddress] = useState(user.address);

    const [editableAreaPhone, setEditableAreaPhone] = useState(false);
    const [profilePhone, setProfilePhone] = useState(user.phone);

    const [editableAreaPosition, setEditableAreaPosition] = useState(false);
    const [profilePosition, setProfilePosition] = useState(user.position);

    const [editableAreaResidence, setEditableAreaResidence] = useState(false);
    const [profileResidence, setProfileResidence] = useState(user.residence);


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
    
      const notEditable = (prop: any, setPropArea: (type: boolean) => void, type?: string) => {
        if(type === 'password') {
          prop = 'change password'
        }
        if(!prop){
          return (
            <div>
              <a
                href="/set"
                className={`${type === 'password' && 'password-field'}`}
                onClick={(e) => {
                  e.preventDefault();
                  return setPropArea(true);
                }}
                title='set value'
              >
                set value
              </a>
            </div>
          );
        }
        
        return (
          <div>
            <a
              href="/set"
              className={`${type !== undefined ? `${type}-field` : ''}`}
              onClick={(e) => {
                e.preventDefault();
                return setPropArea(true);
              }}
              title={prop}
            >
              {prop}
            </a>
          </div>
        );
      };
    
    return(
      <>
        <div className="setting-type">
            <span className="me-3">Profile Name: </span>
            {!editableAreaFullname
                ? notEditable(profileFullname, setEditableAreaFullname)
                : editableInput(profileFullname, 'fullname' ,setProfileFullname, setEditableAreaFullname)}
        </div>
        <div className="setting-type">
            <span className="me-3">E-Mail: </span>
            {!editableAreaEmail
                ? notEditable(profileEmail, setEditableAreaEmail, 'email')
                : editableInput(profileEmail, 'email' ,setProfileEmail, setEditableAreaEmail)}
        </div>
        <div className="setting-type">
            <span className="me-3">Password: </span>
            {!editableAreaPassword
                ? notEditable(profilePassword, setEditableAreaPassword, 'password')
                : editableInput(profilePassword, 'password' ,setProfilePassword, setEditableAreaPassword)}
        </div>
        <div className="setting-type">
            <span className="me-3">Age: </span>
            {!editableAreaAge
                ? notEditable(profileAge, setEditableAreaAge)
                : editableInput(profileAge, 'age', setProfileAge, setEditableAreaAge)}
        </div>
        <div className="setting-type">
            <span className="me-3">Address: </span>
            {!editableAreaAddress
                ? notEditable(profileAddress, setEditableAreaAddress)
                : editableInput(profileAddress, 'address', setProfileAddress, setEditableAreaAddress)}
        </div>
        <div className="setting-type">
            <span className="me-3">Phone: </span>
            {!editableAreaPhone
                ? notEditable(profilePhone, setEditableAreaPhone)
                : editableInput(profilePhone, 'phone', setProfilePhone, setEditableAreaPhone)}
        </div>
        <div className="setting-type">
            <span className="me-3">Job Position: </span>
            {!editableAreaPosition
                ? notEditable(profilePosition, setEditableAreaPosition)
                : editableInput(profilePosition, 'position', setProfilePosition, setEditableAreaPosition)}
        </div>
        <div className="setting-type">
            <span className="me-3">Residence: </span>
            {!editableAreaResidence
                ? notEditable(profileResidence, setEditableAreaResidence)
                : editableInput(profileResidence, 'residence', setProfileResidence, setEditableAreaResidence)}
        </div>
      </>
    )
}

export default SettingsMainSettings;