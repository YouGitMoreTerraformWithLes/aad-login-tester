<template>
  <div class="container">
    <button @click="signIn" class="login-button">Login</button>
    <p>Id Token:
      <textarea v-model="state.idToken">
      </textarea>
    </p>
    <p>Access Token:
      <textarea v-model="state.accessToken">
      </textarea>
    </p>
    <p>Refresh Token:
      <textarea v-model="state.refreshToken">
      </textarea>
    </p>
  </div>
</template>

<script setup lang="ts">
import { PublicClientApplication } from "@azure/msal-browser";
import { reactive } from "vue";
import { msalConfig } from "../auth";

const msalInstance = new PublicClientApplication(msalConfig);

const state = reactive({
  idToken: "" as string,
  accessToken: "" as string,
  refreshToken: "" as string,
});

async function signIn() {
  await msalInstance
    .loginPopup({
      scopes: ["openid", "profile", "email", "offline_access"],
    })
    .then((response: any) => {
      var msalKeys = JSON.parse(localStorage.getItem("msal.token.keys.2d659363-dbd0-43dd-bcee-5ea1461072e5") || "{}");

      var idTokenKey = msalKeys.idToken;
      var accessTokenKey = msalKeys.accessToken;
      var refreshTokenKey = msalKeys.refreshToken;
      
      var it = JSON.parse(localStorage.getItem(idTokenKey) || "").secret;
      var at = JSON.parse(localStorage.getItem(accessTokenKey) || "").secret;
      var rt = JSON.parse(localStorage.getItem(refreshTokenKey) || "").secret;

      state.idToken = it || "";
      state.accessToken = at || "";
      state.refreshToken = at || "";
    });
}
</script>

<style scoped>
button {
  height: 4vh;
  width: 8vw;
  background: transparent;  
  border-color: rgb(26, 29, 29);
  color: rgb(7, 10, 109);
  border-radius: 5px;
  border-style: solid;
  font-size: 1em;
  font-weight: bold;
}
.container {
  height: 100%;
  width: 100%;
}

textarea {
  width: 1000px;
  height: 300px;
}
</style>
