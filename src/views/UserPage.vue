<template>
  <ion-page>
      <header-component page-title="Page utilisateur">
    </header-component>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item v-for="user in users" :key="user.id">
          <ion-label>{{ user.login }}</ion-label>
          <ion-label>{{ user.id }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import UserService from '../store';
import { IonPage, IonContent } from '@ionic/vue';
  import { defineComponent } from 'vue';
export default defineComponent({
  name: 'UserPage',
  components: { IonPage, IonContent },
  data() {
    return {
      users: [],
    };
  },
  methods: {
      // Fonction pour naviguer vers la page "Voir tous les concerts"
      goToConcerts() {
        this.$router.push('/user/concerts');
      },


      // Fonction pour naviguer vers la page "Gérer les utilisateurs"
      CréerConcert() {
        this.$router.push('/user/creerconcert');
      }
    },
  mounted() {
    UserService.getAllUsers().then((response) => {
      this.users = response.data;
    });
  },
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
