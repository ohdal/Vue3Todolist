<template>
  <div class="row">
    <div class="col">
      <span style="background-color: blue">&nbsp;</span>&nbsp;
      <strong>{{ state }}</strong>
    </div>
    <div class="col">
      <div class="btn-group float-end">
        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
          리스트 필터
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <!-- 객체 순회 -->
          <li v-for="key in Object.keys(filters)" :key="key">
            <a class="dropdown-item" @click="filter = key">
              {{ filters[key].str }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListMenu',
  // emit을 사용하기 위해 OPtion API에 이벤트명 선언
  /* emits: ['change-filter'],
  setup(props, context) {
    const filters = inject('filters');;
    const filter = ref(0);

    const state = computed(() => {
      return filters[filter.value].str
    })

    // 컴포지션 함수에서 emit을 이용하기 위해서는
    // 매개변수인 context 객체의 emit함수를 이용해야 한다.
    // setup(props, {emit}) 으로 받아서 사용도 가능
    watch(
      () => filter.value,
      (filter) => {
        context.emit('change-filter', filter);
      }
    )

    return {
      state,
      filter,
      filters,
    } 
  } */
}

</script>

<script setup>
import { ref, watch, computed, inject } from 'vue';

// emits 옵션 대신 defineEmits 함수를 사용하면 된다.
const emit = defineEmits(['change-filter']);
const filters = inject('filters');
const filter = ref(0);

const state = computed(() => {
  return filters[filter.value].str;
})

watch(
  () => filter.value,
  (filter) => {
    // context.emit 대신 defineEmits로 선언한 emit을 이용하면 된다.
    emit('change-filter', filter);
  }
)
</script>