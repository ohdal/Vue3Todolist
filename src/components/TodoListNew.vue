<template>
  <section class="mb-5">
    <div class="container">
      <div class="row justify-content-center m-2">
        <div class="col border border-primary rounded">
          <input type="text" id="todo_input" class="form-control my-2" v-model="job" placeholder="여기에 할일을 적으세요." />
          <div class="row my-2">
            <div class="col-6">
              <input type="date" v-model="date" :min="today" />
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-primary btn-sm float-end" @click="onAddTodo">
                작업추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, reactive, toRefs } from 'vue';

const today = inject('today');
const addTodo = inject('addTodo');
const val_obj = reactive({
  job: '',
  date: today,
  today: today,
})

const onAddTodo = () => {
  if (val_obj.job.length > 0) {
    addTodo(val_obj.job, val_obj.date);
    val_obj.job = '';
    val_obj.date = today;
  }
}


// <script> 태그를 사용해 setup 함수를 통해 return 시키는 경우
// return {...toRefs(val_obj)} 이런식으로 스프레드 연산자를 사용했었다.
const { job, date } = toRefs(val_obj);

</script>