<template>
  <header>
    <hgroup class="my-5">
      <h1>나의 할 일</h1>
      <em>{{ today }}</em>
    </hgroup>
  </header>
  <todo-list-container></todo-list-container>
</template>

<script>
export default {
  name: 'App',
}
</script>

<!-- 기본적으로 정의된 모든 변수들을 -->
<!-- <template> 에서 바로 사용할 수 있도록 해준다.-->
<script setup>
// 따로 컴포넌트 선언이나 변수를 return 하지 않아도
// Vue가 자동으로 설정해준다.
import {inject} from 'vue';
import TodoListContainer from './components/TodoListContainer.vue';

const today = inject('today');
</script>

<style scoped>
hgroup {
  text-align: center;
  font-family: 'Arial Bold';
}

hgroup h1 {
  font-weight: bolder;
}
</style>