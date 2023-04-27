export const msalConfig: any = {
  auth: {
    clientId: "2d659363-dbd0-43dd-bcee-5ea1461072e5",
    authority: "https://login.microsoftonline.us/bbfa7b1d-b413-4c37-8a47-6044c982b892",
    tenantId: "bbfa7b1d-b413-4c37-8a47-6044c982b892",
    knownAuthorities: ["https://login.microsoftonline.us"],
    primaryDomain: "lesm.us",
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};
