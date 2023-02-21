<template>
  <ion-page>
    <header-component
      :page-title="todo.title"
      page-default-back-link="Home"
      v-if="todo"
    ></header-component>

    <ion-content id="container" v-if="todo">
      <ion-img
        :src="todo.img"
        alt="The Wisconsin State Capitol building in Madison, WI at night"
      ></ion-img>

      <h1>{{ todo.title }}</h1>
      <p>{{ todo.description }}</p>

      <ion-button color="warning" :router-link="`/todo/edit/${todo.id}`">
        Modifier
      </ion-button>

      <ion-button color="danger" @click="deleteTodo(todo.id)">
        Supprimer
      </ion-button>
    </ion-content>
    <ion-content v-else>
      <h1>Pas de todo</h1>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonImg,
  IonButton,
  alertController,
} from "@ionic/vue";
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { useRoute, useRouter } from "vue-router";
import { afficherToast } from "../components/utils/toast.js";

export default defineComponent({
  name: "TodoDetailPage",
  setup() {
    const store = useStore();
    const route = useRoute();
    const todoId = parseInt(route.params.id);
    const router = useRouter();

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
                  afficherToast("Todo supprimé avec succès", "success");
                } else {
                  afficherToast(
                    "Erreur lors de la suppresion d'un Todo",
                    "danger"
                  );
                }
                router.push("/");
              });
            },
          },
        ],
      });
      await alert.present();
    };

    //const todos= store.state.todos,
    const todo = computed(() => {
      return store.getters.getTodoById(todoId);
    });

    return { todo, deleteTodo };
  },
  // data : ()=>{
  //   test:"test"
  // },
  components: { IonContent, IonPage, IonImg, IonButton },
});
</script>

<style scoped>
/*
ion-toast.toast-success {
  --background: #28a745;
  --color: #fff;
}

ion-toast.toast-error {
  --background: red;
  --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
  --color: black;
}
*/

#container {
  padding-left: 15px;
  padding-right: 15px;
}
</style>
