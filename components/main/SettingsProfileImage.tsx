import { User } from "../../generated/graphql";
import { useState } from "react";
import EditableFieldContainer from "../EditableFieldContainer"

interface Props {
    user: User
}

const SettingsProfileImage: React.FC<Props> = ({user}) => {

    const [editableAreaImage, setEditableAreaImage] = useState(false);
    const [profileImage, setProfileImage] = useState(user.img);

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
          />
        );
      };
    
      const notEditable = (prop: any, setPropArea: (type: boolean) => void, type?: string) => {
        if(type === 'password') {
          prop = '********'
        }
        if(!prop){
          return (
            <div>
              <a
                href="/set"
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
              onClick={(e) => {
                e.preventDefault();
                return setPropArea(true);
              }}
              title={type !== 'img' ? prop : 'Profile Image'}
            >
              {type !== 'img' ? prop : <img className="b-radius-100" src={prop} height={200} width={200} />}
            </a>
          </div>
        );
      };
    


    return(
        <div className="setting-type">
            <span className="me-3">Profile Image: </span>
            {!editableAreaImage
                ? notEditable(profileImage, setEditableAreaImage, 'img')
                : editableInput(profileImage, 'img' ,setProfileImage, setEditableAreaImage)}
        </div>
    )
}

export default SettingsProfileImage;