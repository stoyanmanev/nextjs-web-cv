import HeaderItem from "./HeaderItem";
import MainMenuContainer from "./MainMenuContainer";
import SocialLinksContainer from "./SocialLinksContainer";
import HeaderButtonsContainer from "./HeaderButtonsContainer";
import CopyrightsContainer from "./CopyrightsContainer";
import { User } from "../generated/graphql";

interface Props {
  user: User;
}

const HeaderContainer: React.FC<Props> = ({ user }) => {
  return (
    <header id="site_header" className="header">
      <div className="header-content">
        <HeaderItem user={user} />
      </div>
      <MainMenuContainer />
      {/* {user?.social && <SocialLinksContainer social={user.social} />} */}
      {/* {user?.documents && <HeaderButtonsContainer documents={user.documents} />} */}
      <CopyrightsContainer />
    </header>
  );
};

export default HeaderContainer;
