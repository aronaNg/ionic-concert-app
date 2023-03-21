<template>
  <ion-page>
    <header-component page-title="Ajouter un concert"></header-component>

    <ion-content :fullscreen="true">
      <concertForm :todo_props="todo" @submit-form="saveTodo"></concertForm>
    </ion-content>
  </ion-page>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useStore } from "../store";
//import { useStore } from "../store/concerts";

import concertForm from "@/components/concertForm.vue";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import { afficherToast } from "../components/utils/toast.js";
export default defineComponent({
  name: "UserCreerConcertPage",
  setup() {
    const router = useRouter();
    const store = useStore();

    const todo = {
      nom: "",
      description: "",
      image: "",
      date: "",
      heure: "",
      categorie_id: "",
      user_id: "",
      
    };

    function saveTodo(todoEmit) {
      //console.log(todoEmit);
      store.dispatch("addTodo", todoEmit).then((response) => {
        if (response.statut == 200) {
          afficherToast("Concert ajouté avec succès", "success");
        } else {
          afficherToast("Erreur lors de l'ajout d'un concert", "danger");
        }
        router.push("/user/concerts/");
      });
    }

    return { saveTodo, todo };
  },
  components: { IonContent, IonPage, HeaderComponent, concertForm },
  // methods: {
  //     submitForm(){
  //         console.log(this.todo);
  //     }
  // },
});
</script>
