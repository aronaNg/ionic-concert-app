<template>
    <ion-page>
      <header-component page-title="Éditer un concert"></header-component>
  
      <ion-content :fullscreen="true">
        <concertForm :todo_props="todo" @submit-form="editTodo"></concertForm>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import { IonContent, IonPage } from "@ionic/vue";
  import { useStore } from "../store";
  import concertForm from "@/components/concertForm.vue";
  import { useRouter, useRoute } from "vue-router";
  import { defineComponent } from "vue";
  import { afficherToast } from "../components/utils/toast.js";
  
  export default defineComponent({
    name: "concertEditPage",
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
            afficherToast("Concert édité avec succès", "success");
          } else {
            afficherToast("Erreur lors de l'edit d'un concert", "danger");
          }
          router.push("/user/concerts");
        });
      }
      return { editTodo, todo };
    },
    components: { IonContent, IonPage, HeaderComponent, concertForm },
    // methods: {
    //     submitForm(){
    //         console.log(this.todo);
    //     }
    // },
  });
  </script>
  