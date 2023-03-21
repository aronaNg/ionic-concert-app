<!-- <template>
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
</template> -->
<template>
  <ion-page>
    <header-component page-title="Liste des utilisateurs">
      <template v-slot:button-right>
        <ion-buttons slot="end">
          <ion-button router-link="/admin/adduser" fill="outline" shape="circle">
            <ion-icon :icon="add"></ion-icon>
          </ion-button>
        </ion-buttons>
      </template>
    </header-component>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="user in users" v-bind:key="user.id">
         
          <ion-label>{{ user.login }}</ion-label>
          <ion-label>{{ user.id }}</ion-label>
          <ion-button :router-link="`/category/${todo.id}`"
            >Opérations</ion-button
          >
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { computed, defineComponent } from "vue";
import { useStore } from "../store";
import { useRoute, useRouter } from "vue-router";

import { add } from "ionicons/icons";

export default defineComponent({
  name: "AdminGererUserPage",
  setup() {
    const router = useRouter();

    const store = useStore();
    //const todos= store.state.todos,

    store.dispatch("getTodos");

    const users = computed(() => {
      return store.getters.getAllTodos;
    });

    const logout = () => {
      store.dispatch("logout");
      router.push("/login");
    };

    return { users, add, logout};
  },
  components: {
    IonButtons,
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonIcon,
    IonList,
    IonButton,
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
