import Authentication from "./Authentication";

function JwtManager() {
  let jwt = null;
  let refreshId = null;

  const getToken = () => jwt;

  const setToken = (token, tokenExpiration) => {
    console.log(tokenExpiration);
    jwt = token;
    refreshToken(tokenExpiration);
  };

  const refreshToken = (expiration) => {
    const delayInSeconds = expiration - 60;
    console.log(delayInSeconds);

    refreshId = window.setTimeout(() => {
      console.log("refreshing token");
      Authentication.refresh()
        .then((response) => response.json())
        .then((data) => setToken(data.token, data.expiration))
        .catch(console.error);
    }, delayInSeconds * 1000);
  };

  const abortRefresh = () => {
    if (refreshId) {
      window.clearTimeout(refreshId);
    }
  };

  const removeToken = () => {
    jwt = null;
    abortRefresh();
  };

  return {
    getToken,
    setToken,
    removeToken,
  };
}

export default JwtManager();
