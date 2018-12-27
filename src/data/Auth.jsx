import { useState } from "react";
import netlify from "netlify-auth-providers";

const Auth = () => {
  const [userAuthStatus, setUserAuthStatus] = useState("");

  const authWithGithub = async () => {
    const authenticator = new netlify({
      site_id: "1d9bd93c-7549-4ad2-b3ef-ada09b0dcd2e"
    });

    const updateStatusAfterAuth = data => {
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
      setUserAuthStatus(token);
    }
  };

  return { authWithGithub, userAuthStatus, localStorageTokenCheck };
};

export default Auth;
