import { createApp } from "vue";
import { createPinia } from "pinia"; // Respectez le format Prettier
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


const app = createApp(App);

// Initialisez Pinia et ajoutez-le à l'application Vue
const pinia = createPinia();
app.use(pinia);

// Ajoutez le router à l'application Vue
app.use(router);

app.mount("#app");
