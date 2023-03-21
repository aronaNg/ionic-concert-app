<template>
  <ion-page>
    <header-component page-title="Ajout d'un concert">
      <template v-slot:button-right>
    
        
      </template>
    </header-component>
    <ion-content :fullscreen="true">
        
      <ion-button router-link="/user" fill="outline" shape="circle">Retour au menu user</ion-button>
    </ion-content>
  </ion-page>
</template>
<script>
  import { IonPage, IonContent,IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'UserCreerConcertPage',
    components: { IonPage, IonContent,IonButton },
    methods: {
      // Fonction pour naviguer vers la page "Voir tous les concerts"
      createConcert() {
        this.$router.push('/user/creerconcert');
      },

      // Fonction pour naviguer vers la page "Gérer les catégories"
      gererConcerts() {
        this.$router.push('/user/concerts');
      }
    }
  });
</script>