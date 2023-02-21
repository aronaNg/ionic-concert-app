<template>
    <ion-page>
    <header-component page-title="Ajouter une ville"></header-component>
      <ion-content :fullscreen="true">
        <todo-form :todo_prop="todo" @submit-form="saveTodo">
        </todo-form>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonContent,IonPage} from '@ionic/vue';
  import TodoForm from '@/components/TodoForm.vue'
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import { defineComponent } from 'vue';
  import { useStore } from "../store";
  import { useRouter } from "vue-router";

  export default defineComponent({
  
    name:"ToDoAddPage",

    setup(){
      const store = useStore();
      const router = useRouter();
      const todo = {
        title:"",
        img:"",
        description:""
      }
      function saveTodo(todoEmit) {
        store.dispatch("addTodo", this.todoEmit);
        router.push("/")
      }

      return(saveTodo,todo);

    },
    // methods:{
    //   submiForm(){
    //     console.log(this.$data.todo);

    //   }
    // },
    data(){
      return{
        todo:[{
          title:"",
          img:"",
          description:""     
        },
      ]
      }
  },
    components: {IonContent,IonPage,HeaderComponent,TodoForm},
  });
  </script>
  
  <style scoped>
  
  </style>
  