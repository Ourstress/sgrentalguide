import { useState } from "react";
import netlify from "netlify-auth-providers";

const Auth = () => {
  const [userAuthStatus, setUserAuthStatus] = useState("");
  const [userData, setUserData] = useState("");

  const getGitHubUserInfo = async token => {
    const results = await fetch(
      `https://api.github.com/user?access_token=${token}`
    );
    const processedResults = await results.json();
    setUserData(processedResults.id);
  };
  const authWithGithub = async () => {
    const authenticator = new netlify({
      site_id: "1d9bd93c-7549-4ad2-b3ef-ada09b0dcd2e"
    });

    const updateStatusAfterAuth = async data => {
      getGitHubUserInfo(data.token);
      window.localStorage.setItem("github-token", data.token);
      setUserAuthStatus(data.token);
    };
    await authenticator.authenticate(
      {
        provider: "github",
        scope: "user"
      },
      (err, data) => {
        return err ? console.error(err) : updateStatusAfterAuth(data);
      }
    );
  };

  const localStorageTokenCheck = () => {
    const token = window.localStorage.getItem("github-token");
    if (token) {
      getGitHubUserInfo(token);
      setUserAuthStatus(token);
    }
  };

  return { authWithGithub, userAuthStatus, localStorageTokenCheck, userData };
};

export default Auth;
