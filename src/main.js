import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min.js'

const app = createApp(App);

// 오늘을 나타내는 문자열 전역적으로 만들기
app.provide('today', new Date().toISOString().split('T')[0]);
app.mount('#app');