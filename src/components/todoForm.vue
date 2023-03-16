<template>
  <form @submit.prevent="submitForm1">
    <ion-list>
      <ion-item>
        <ion-label> Titre du Todo </ion-label>
        <ion-input
          type="text"
          placeholder="Titre du Todo"
          v-model="todo.title"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label> Description du Todo </ion-label>
        <ion-textarea col="5" v-model="todo.description"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label> Image URL de ton Todo </ion-label>
        <ion-input type="url" v-model="todo.img"></ion-input>
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
  IonTextarea,
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
    IonTextarea,
    IonButton,
  },
};
</script>

<style lang="scss" scoped></style>
