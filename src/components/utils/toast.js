import {
  toastController
} from "@ionic/vue";

export async function afficherToast(message, color) {
      const toast = await toastController.create({
        message: message,
        duration: 50000,
          cssClass: "toast-" + color,
        color : color,
        buttons: [
          {
            text: "Fermer",
            role: "cancel",
          },
        ],
      });
      return await toast.present();
    }