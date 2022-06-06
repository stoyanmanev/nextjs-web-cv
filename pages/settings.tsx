import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import HeaderContainer from "../components/HeaderContainer";
import Loader from "../components/LoaderContainer";
import SettingsContainer from "../components/main/SettingsContainer";
import { useCurrentUserQuery, User } from "../generated/graphql";

const Settings: NextPage = () => {
  const [user, setUser] = useState<User>()
  const { isLoading, isError, data, error, refetch } = useCurrentUserQuery<any>(
    {},
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if(data?.currentUser){
      setUser(data.currentUser);
    }
  }, [data])

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (isError) {
    const msg = String(error);
    return (
      <div>
        <p>{msg}</p>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Settings for Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <div className="lm-bg"></div>
        <div className="page">
          <div className="page-content">
            {user && <HeaderContainer user={user} />}
            <main>
              <div className="content-area">
                <div className="animated-sections">
                  {user && <SettingsContainer user={user} setUser={setUser} refetch={refetch}/>}
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    </div>
  );
};

export default Settings;
