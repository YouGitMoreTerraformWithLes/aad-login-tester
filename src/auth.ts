export const msalConfig: any = {
  auth: {
    clientId: "1234567890",
    authorityUrl: "https://login.microsoftonline.com/1234567890",
    tenantId: "1234567890",
    knownAuthorities: ["https://login.microsoftonline.com"],
    primaryDomain: "mydomain.com",
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
  }
}
