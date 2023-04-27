<template>
  <container>
    <button @click="signIn" class="login-button">
    Login
      </button>
    </container>
</template>

<script setup lang="ts">
  import {PublicClientApplication} from "@azure/msal-browser";
  import {msalConfig} from "../auth"

  const msalInstance = new PublicClientApplication(
    msalConfig
  );

  async function signIn() {
    await msalInstance.loginPopup({
      scopes: ['openid', 'profile', 'email', 'offline_access']
    }).then(() => {

    });
  }
</script>

<style scoped>
button {
  height: 4vh;
  width: 8vw;
  background: transparent;
  border-color: cyan;
  color: cyan;
  border-radius: 5px;
  border-style:  solid; 
  font-size: 1em;
  font-weight: bold;

}
</style>
