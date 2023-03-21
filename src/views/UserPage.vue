<template>
  <ion-page>
      <header-component page-title="Page utilisateur">
    </header-component>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm="6" size-md="4">
            <ion-button expand="block" @click="createConcert">
              Créer un concert
            </ion-button>
          </ion-col>
          <ion-col size="12" size-sm="6" size-md="4">
            <ion-button expand="block" @click="gererConcerts">
              Gérer tous mes concerts
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AdminPage',
    components: { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton },
    methods: {
      // Fonction pour naviguer vers la page "Voir tous les concerts"
      createConcert() {
        this.$router.push('/user/creerconcert');
      },

      // Fonction pour naviguer vers la page "Gérer les catégories"
      gererConcerts() {
        this.$router.push('/user/Concerts');
      }
    }
  });
</script>

<style scoped>

ion-button[shape="circle"]{
--border-raduis: 50%
width: 35px;
height: 50px;
}

#container {
text-align: center;

position: absolute;
left: 0;
right: 0;
top: 50%;
transform: translateY(-50%);
}

#container strong {
font-size: 20px;
line-height: 26px;
}

#container p {
font-size: 16px;
line-height: 22px;

color: #8c8c8c;

margin: 0;
}

#container a {
text-decoration: none;
}
</style>
