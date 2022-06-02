import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import HeaderContainer from "../components/HeaderContainer";
import BlogSectionContainer from "../components/main/BlogSectionContainer";
import { useCurrentUserQuery, User } from "../generated/graphql";

const Blog: NextPage = () => {

  const [user, setUser] = useState<User>()
  const {data} = useCurrentUserQuery<any>({}, {
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if(data?.currentUser){
      setUser(data.currentUser);
    }
  }, [data])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
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
                  {user && <BlogSectionContainer user={user} />}
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    </div>
  );
};

export default Blog;


