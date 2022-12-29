import { Auth0Client } from "@auth0/auth0-spa-js";

const auth0 = new Auth0Client({
  domain: "dev-pkl4wcxhgtnz6ug6.us.auth0.com",
  clientId: "peUEx2VUs5FEtQiFehkfiUwOT3Ifjd8u",
});

const token = async () => {
  console.log("dfdf");
  const accessToken = await auth0.getTokenSilently();

  console.log("accessToken");
  const result = await fetch("http://localhost:3000/", {
    method: "GET",
    headers: {
      authorization: "Bearer " + accessToken,
    },
  });
  const data = await result.json();
  console.log(data);
};

const userActions = {
  token,
};
export default userActions;
