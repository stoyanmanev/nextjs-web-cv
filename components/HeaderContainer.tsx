import HeaderItem from "./HeaderItem";
import MainMenuContainer from "./MainMenuContainer";
import SocialLinksContainer from "./SocialLinksContainer";
import HeaderButtonsContainer from "./HeaderButtonsContainer";
import CopyrightsContainer from "./CopyrightsContainer";
import { User } from "../generated/graphql";

interface Props {
  user: User;
  setToken: (type: string) => void
  setUser: (type: User) => void
}

const HeaderContainer: React.FC<Props> = ({ user, setToken, setUser }) => {
  return (
    <header id="site_header" className="header">
      <div className="header-content">
        <HeaderItem user={user} />
      </div>
      <MainMenuContainer setToken={setToken} setUser={setUser}/>
      <SocialLinksContainer user={user} />
      {user?.cv && <HeaderButtonsContainer cv={user.cv} />}
      <CopyrightsContainer />
    </header>
  );
};

export default HeaderContainer;
