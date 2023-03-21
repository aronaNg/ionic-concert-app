<template>
    <form @submit.prevent="submitForm1">
      <ion-list>
        <ion-item>
          <ion-label> Nom du concert </ion-label>
          <ion-input
            type="text"
            placeholder="Nom deu concert"
            v-model="todo.nom"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label> Description du concert </ion-label>
          <ion-input
            type="text"
            placeholder="Description du concert"
            v-model="todo.description"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label> Date du concert </ion-label>
          <ion-input
            type="text"
            placeholder="Date du concert"
            v-model="todo.date"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label> Heure du concert </ion-label>
          <ion-input
            type="text"
            placeholder="Heure du concert"
            v-model="todo.heure"
          ></ion-input>
        </ion-item>
      </ion-list>
      <ion-button expand="full" type="submit">Sauvegarder</ion-button>
    </form>
  </template>
  
  <script>
  import {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  } from "@ionic/vue";
  import { toRef } from "vue";
  
  export default {
    name: "todoForm",
    props: ["todo_props"],
    emits: ["submitForm"],
    setup(props, context) {
      const todo = toRef(props, "todo_props");
  
      function submitForm1() {
        context.emit("submitForm", this.todo);
      }
      return { submitForm1, todo };
    },
    components: {
      IonList,
      IonItem,
      IonLabel,
      IonInput,
      IonButton,
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  