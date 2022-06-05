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
        <title>Blog Module: View all posts in one page.</title>
        <meta name="description" content="Blog Module: View all posts in one page. You can create your blog news in your setting menu in section Blog Module Settings." />
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


