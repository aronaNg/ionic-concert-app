<template>
  <ion-page>
    <header-component page-title="Ajouter une catégorie"></header-component>

    <ion-content :fullscreen="true">
      <todoForm :todo_props="todo" @submit-form="saveTodo"></todoForm>
    </ion-content>
  </ion-page>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useStore } from "../store";
import todoForm from "@/components/todoForm.vue";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import { afficherToast } from "../components/utils/toast.js";
export default defineComponent({
  name: "todoAdd",
  setup() {
    const router = useRouter();
    const store = useStore();

    const todo = {
      title: "",
      description: "",
      img: "",
    };

    function saveTodo(todoEmit) {
      //console.log(todoEmit);
      store.dispatch("addTodo", todoEmit).then((response) => {
        if (response.statut == 200) {
          afficherToast("Todo ajoutée avec succès", "success");
        } else {
          afficherToast("Erreur lors de l'ajout d'un Todo", "danger");
        }
        router.push("/category");
      });
    }

    return { saveTodo, todo };
  },
  components: { IonContent, IonPage, HeaderComponent, todoForm },
  // methods: {
  //     submitForm(){
  //         console.log(this.todo);
  //     }
  // },
});
</script>
