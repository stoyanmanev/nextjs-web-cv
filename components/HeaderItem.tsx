import React from "react";
import Image from "next/image";
import { User } from "../generated/graphql";

interface Props {
  user: User;
}

const HeaderItem: React.FC<Props> = ({ user }) => {
  console.log(user.img)
  return (
    <>
      {user.img && <div className="header-photo">
         <img src={user.img} width={180} height={180} alt={user.fullname} />
      </div>}
      <div className="header-titles">
        <h2>{user.fullname}</h2>
        <h4>{user.position}</h4>
      </div>
    </>
  );
};

export default HeaderItem;
