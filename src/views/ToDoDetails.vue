<template>
    <ion-page>
    <header-component page-title="Ville de destination" page-default="Home"></header-component>
      <ion-content :fullscreen="true">
        <ion-img :src="todo.img" alt="The Wisconsin State Capitol building in Madison, WI at night"></ion-img>
          <h1>{{todo.title}}</h1>
          <p>{{todo.description}}
          </p>
      </ion-content>
    </ion-page>
</template>
  
  <script>
  import { IonContent, IonPage, IonImg } from '@ionic/vue';
  import { defineComponent, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  export default defineComponent({
    setup(){
      const store = useStore();
      const route = useRoute();
      //const todoId=route.params.id;
      const todoId=parseInt(route.params.id);

      const todo = computed(()=>{
      return store.getters.getTodoById(todoId);
    })
      return {todo}
    },
    name:"ToDoDetails",
    // data:()=>{
    //   test:"test"
    // },
    components: {IonContent, IonPage,IonImg },
  });
  </script>
  
  <style scoped>
  
  </style>
  