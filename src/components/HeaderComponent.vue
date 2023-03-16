<template>
  <ion-header >
    <ion-toolbar color="primary">
      <ion-buttons slot="start">
        <ion-button slot="start">
          <ion-back-button text="Retour" :default-href="pageDefaultBackLink"></ion-back-button>
        </ion-button>
      </ion-buttons>
      <ion-title>{{pageTitle}}</ion-title>
      <slot name="button-right">
      </slot>
    </ion-toolbar>
  </ion-header>
</template>


<script lang="ts">
import {  IonHeader, IonTitle, IonToolbar,IonButtons,IonButton,IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';

  export default defineComponent({
    name:"HeaderComponent",
    props:["pageTitle","pageDefaultBackLink"],
    components: {  IonHeader, IonTitle, IonToolbar,IonButtons,IonButton,IonBackButton },
  });
</script>