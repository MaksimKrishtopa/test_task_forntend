import { createApp } from 'vue';
import App from './App.vue';
import Header from '@/components/Header.vue';
import Slider from '@/components/Slider.vue';
import Catalog from '@/components/Catalog.vue';
import Orders from '@/components/Orders.vue';
import router from './router';

const app = createApp(App);

app.use(router); // Подключаем роутер к приложению

app.component('Header', Header);
app.component('Slider', Slider);
app.component('Catalog', Catalog);
app.component('Orders', Orders);

app.mount('#app');