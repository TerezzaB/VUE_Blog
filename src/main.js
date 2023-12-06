import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css' // Choose a theme
import 'primevue/resources/primevue.min.css' // PrimeVue styles

// Import the Card component from PrimeVue
import Card from 'primevue/card';

const app = createApp(App);

// Use PrimeVue and configure it
// app.use(PrimeVue).use(router);
app.use(PrimeVue, { inputStyle: "filled" }).use(router)

// Register the Card component globally
app.component('P-Card', Card);

// Mount the app
app.mount('#app');
