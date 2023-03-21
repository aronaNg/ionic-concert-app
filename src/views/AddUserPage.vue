<template>
    <ion-page>
      <header-component page-title="Ajouter un utilisateur"></header-component>
  
      <ion-content :fullscreen="true">
        <adminForm :todo_props="todo" @submit-form="saveTodo"></adminForm>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import { IonContent, IonPage } from "@ionic/vue";
  import { useStore } from "../store";
  import  adminForm from "@/components/adminForm.vue";
  import { useRouter } from "vue-router";
  import { defineComponent } from "vue";
  import { afficherToast } from "../components/utils/toast.js";
  export default defineComponent({
    name: "AddUserPage",
    setup() {
      const router = useRouter();
      const store = useStore();
  
      const todo = {
        login: "",
        password: "",
        role: "",
      };
  
      function saveTodo(todoEmit) {
        //console.log(todoEmit);
        store.dispatch("addTodo", todoEmit).then((response) => {
          if (response.statut == 200) {
            afficherToast("User ajouté avec succès", "success");
          } else {
            afficherToast("Erreur lors de l'ajout d'un user", "danger");
          }
          router.push("/admin/gereruser");
        });
      }
  
      return { saveTodo, todo };
    },
    components: { IonContent, IonPage, HeaderComponent, adminForm },
    // methods: {
    //     submitForm(){
    //         console.log(this.todo);
    //     }
    // },
  });
  </script>
  