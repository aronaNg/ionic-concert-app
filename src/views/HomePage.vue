<template>
  <ion-page>
    <header-component page-title="Liste des catégories">
      <template v-slot:button-right>
        <ion-buttons slot="end">
          <ion-button router-link="/todo/add" fill="outline" shape="circle">
            <ion-icon :icon="add"></ion-icon>
          </ion-button>
        </ion-buttons>
      </template>
    </header-component>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="todo in categories" v-bind:key="todo.id">
         
          <ion-label>
            <h2>{{ todo.libelle }}</h2>
          </ion-label>
          <ion-button :router-link="`/todo/${todo.id}`"
            >Voir le détail</ion-button
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

import { add } from "ionicons/icons";

export default defineComponent({
  name: "HomePage",
  setup() {
    const store = useStore();
    //const todos= store.state.todos,

    store.dispatch("getTodos");

    const categories = computed(() => {
      return store.getters.getAllTodos;
    });

    return { categories, add };
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
