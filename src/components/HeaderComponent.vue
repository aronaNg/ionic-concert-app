<template>
    <ion-header> 
      <ion-toolbar  color="dark">
        <ion-buttons slot="start">
          <ion-button>
            <ion-back-button text="Retour" :default-href=pageDefault></ion-back-button>
        </ion-button>
        </ion-buttons>
        <ion-title>{{pageTitle}}</ion-title>
      </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">
import { IonHeader, IonTitle, IonToolbar, IonButtons,IonButton, IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({

  name:"HeaderComponent",
  props:["pageTitle","pageDefault"],
  components: {IonHeader, IonTitle, IonToolbar,IonButtons, IonButton, IonBackButton },
});
</script>