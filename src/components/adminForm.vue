<template>
  <form @submit.prevent="submitForm1">
    <ion-list>
      <ion-item>
        <ion-label> Nom de l'utilisateur </ion-label>
        <ion-input
          type="text"
          placeholder="Nom de l'utilisateur"
          v-model="todo.login"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label> Mot de passe</ion-label>
        <ion-input
          type="text"
          placeholder="votre mot dee passe"
          v-model="todo.password"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label> Rôle </ion-label>
        <ion-input
          type="text"
          placeholder="rôle"
          v-model="todo.role"
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
  name: "adminForm",
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
