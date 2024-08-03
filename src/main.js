import { createApp } from 'vue'
import App from './App.vue'
import toastPlugin from './plugins/toastPlugin';

const app = createApp(App);
app.use(toastPlugin);
app.mount('#app');

