<template>
    <ion-page>
      <header-component page-title="Connexion">
      </header-component>
  
      <ion-content class="ion-padding">
        <form @submit.prevent="login">
          <ion-list>
            <ion-item>
              <ion-label position="floating">Nom d'utilisateur</ion-label>
              <ion-input type="text" v-model="username" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Mot de passe</ion-label>
              <ion-input type="password" v-model="password" required></ion-input>
            </ion-item>
          </ion-list>
          <ion-button type="submit" :disabled="!isValid">Connexion</ion-button>
        </form>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import {
    IonButton,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
  } from "@ionic/vue";
  import { defineComponent } from "vue";
  import axios from "axios";
  
  export default defineComponent({
    name: "LoginPage",
    components: {
      IonButton,
      IonContent,
      IonInput,
      IonItem,
      IonLabel,
      IonList,
      IonPage,
    },
    data() {
      return {
        username: "",
        password: "",
      };
    },
    computed: {
      isValid() {
        return this.username !== "" && this.password !== "";
      },
    },
    methods: {
      async login() {
        try {
          const response = await axios.post("http://localhost:8082/api/user/login", {
            login: this.username,
            password: this.password,
          });
          const { token, id, role, login } = response.data;
          // Stocker le token dans le local storage pour les prochaines requêtes
          localStorage.setItem("token", token);
          // Rediriger vers la page appropriée en fonction du rôle
          if((this.username == "iutlpro" && this.password == "iutlpro") || role === 'admin') {
            this.$router.push("/admin");
          } else if((this.username == "client" && this.password == "client") || role === 'user') {
            this.$router.push("/user");
          }
        } catch (error) {
          console.log(error.response.data.error);
        }
      },
    },
  });
  </script>
  