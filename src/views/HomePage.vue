<template>
  <ion-page>
    <header-component page-title="Liste des villes"></header-component>
    <template v-slot:button-right>
      <ion-buttons slot="end">
        <ion-button router-link="/todo/add" fill="outline" shape="circle">
          <!-- <ion-icon :icon="add"></ion-icon> -->

        </ion-button>
        
      </ion-buttons>
    </template>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="todo in todos" v-bind:key="todo.id">
          <ion-thumbnail slot="start">
            <ion-img :src="todo.img" alt="Image de la ville"></ion-img>
          </ion-thumbnail>
          <ion-label>
            <h1>{{todo.title}}</h1>
            <p>{{ todo.description }}</p>
          </ion-label>
          <ion-button :router-link="'/todo/${todo.id}'">Acheter un billet</ion-button>
          </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonList, IonItem,IonLabel,IonButton,IonButtons,IonThumbnail } from '@ionic/vue';
import { defineComponent, computed } from 'vue';
import { store} from "../store/index";
import HeaderComponent from '@/components/HeaderComponent.vue';
//import { useStore } from "../store";

// import { IonIcon } from '@ionic/icons';

export default defineComponent({

  name:"HomePage",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props){
   // const store = useStore();
    //methode 1
    //const todos = store
    // recuperation des getters
    const todos = computed(()=>{
      return store.getters.getAlltodos;
    })
    return {todos}


  },
  data(){
    return{}},

  components: {IonContent, IonPage, IonItem, IonLabel, IonList,IonButton,IonButtons,IonThumbnail,HeaderComponent },
});
</script>

ion-button[shape="circle"]{
  --border-radius: 50%;
  width:35px;
  height:35px:
}
<style scoped>
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
