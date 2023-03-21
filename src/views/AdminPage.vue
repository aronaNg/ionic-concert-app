<template>
    <ion-page>
        <header-component page-title="Page d'administration">
      </header-component>
  
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size="12" size-sm="6" size-md="4">
              <ion-button expand="block" @click="goToConcerts">
                Voir tous les concerts
              </ion-button>
            </ion-col>
            <ion-col size="12" size-sm="6" size-md="4">
              <ion-button expand="block" @click="goToCategories">
                Gérer les catégories
              </ion-button>
            </ion-col>
            <ion-col size="12" size-sm="6" size-md="4">
              <ion-button expand="block" @click="goToUsers">
                Gérer les utilisateurs
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
        goToConcerts() {
          this.$router.push('/admin/gererconcerts');
        },
  
        // Fonction pour naviguer vers la page "Gérer les catégories"
        goToCategories() {
          this.$router.push('/category');
        },
  
        // Fonction pour naviguer vers la page "Gérer les utilisateurs"
        goToUsers() {
          this.$router.push('/admin/gereruser');
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
