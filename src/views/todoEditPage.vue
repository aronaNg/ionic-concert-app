<template>
  <ion-page>
    <header-component page-title="Ajouter un todo"></header-component>

    <ion-content :fullscreen="true">
      <todoForm :todo_props="todo" @submit-form="editTodo"></todoForm>
    </ion-content>
  </ion-page>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useStore } from "../store";
import todoForm from "@/components/todoForm.vue";
import { useRouter, useRoute } from "vue-router";
import { defineComponent } from "vue";
import { afficherToast } from "../components/utils/toast.js";

export default defineComponent({
  name: "todoEditPage",
  setup() {
    const router = useRouter();
    const store = useStore();
    const route = useRoute();

    const todo_id = parseInt(route.params.id);
    const todo = store.getters.getTodoById(todo_id);
    console.log(todo);
    function editTodo(todoEmit) {
      //console.log(todoEmit);
      store.dispatch("editTodo", todoEmit).then((response) => {
        if (response.statut == 200) {
          afficherToast("Todo éditée avec succès", "success");
        } else {
          afficherToast("Erreur lors de l'edit d'un Todo", "danger");
        }
        router.push("/");
      });
    }
    return { editTodo, todo };
  },
  components: { IonContent, IonPage, HeaderComponent, todoForm },
  // methods: {
  //     submitForm(){
  //         console.log(this.todo);
  //     }
  // },
});
</script>
