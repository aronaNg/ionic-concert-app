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
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item v-for="user in users" v-bind:key="user.id">
         
          <ion-label>{{ user.libelle}}</ion-label>
          <ion-button color="danger" @click="deleteTodo(todo.id)">
        Supprimer
      </ion-button>
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
  alertController,

} from "@ionic/vue";
import { computed, defineComponent } from "vue";
import { useStore } from "../store";
import { useRoute, useRouter } from "vue-router";
import { afficherToast } from "../components/utils/toast.js";

import { add } from "ionicons/icons";

export default defineComponent({
  name: "AdminGererUserPage",
  setup() {

    const store = useStore();
    //const todos= store.state.todos,
    const router = useRouter();
    const route = useRoute();
    const todoId = parseInt(route.params.id);

    const deleteTodo = async (id) => {
      const alert = await alertController.create({
        header: "Êtes-vous sûr de supprimer?",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
          },
          {
            text: "Oui, je confirme",
            role: "Confirm",
            handler: () => {
              store.dispatch("deleteTodo", id).then((response) => {
                if (response.statut == 200) {
                  afficherToast("Catégorie supprimée avec succès", "success");
                } else {
                  afficherToast(
                    "Erreur lors de la suppresion d'un Catégorie",
                    "danger"
                  );
                }
                router.push("/admin/gereruser");
              });
            },
          },
        ],
      });
      await alert.present();
    };
     const todo = computed(() => {
      return store.getters.getTodoById(todoId);
    });


    store.dispatch("getTodos");

    const users = computed(() => {
      return store.getters.getAllTodos;
    });

    return { users, add, todo,deleteTodo};
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
