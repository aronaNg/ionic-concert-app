<template>
        <form @submit.prevent="submitForm">
            <ion-list>
                <ion-item>
                    <ion-label>Nom de la ville</ion-label>
                    <ion-input type="text" placeholder="nom de la ville" v-model="todo.title"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>description de la ville</ion-label>
                    <ion-textarea col="5" v-model="todo.description"></ion-textarea>
                </ion-item>
                <ion-item>
                    <ion-label>Image de la ville</ion-label>
                    <ion-input type="url" v-model="todo.img"></ion-input>
                </ion-item>    
            </ion-list>

            <ion-button expand="full" type="submit">Sauvegarder</ion-button>
        </form>
</template>
<script>
import {IonList,IonLabel,IonInput,IonTextarea,IonItem,IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useStore } from "../store";

export default defineComponent({
  
    name:"TodoForm",
    props:["todo_prop"],
    emits:["submitForm"],


    setup(props,context){
      const store = useStore();
      const todo = {
        title:"",
        img:"",
        description:""
      }
      function submitForm() {
        context.$emits("addTodo", this.todo);
      }

      return(submitForm,todo);

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
    components: {IonList,IonLabel,IonInput,IonTextarea,IonItem,IonButton },
  });
  </script>
  
  <style scoped>
  
  </style>