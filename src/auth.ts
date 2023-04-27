export const msalConfig: any = {
  auth: {
    clientId: "a79fa0ef-e676-4f95-87d3-64304ceebec4",
    authorityUrl: "https://login.microsoftonline.com/7832cdfd-b337-4d07-af7e-9de082e16b31",
    tenantId: "7832cdfd-b337-4d07-af7e-9de082e16b31",
    knownAuthorities: ["https://login.microsoftonline.com"],
    primaryDomain: "sdsheriff.gov",
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
  }
}
