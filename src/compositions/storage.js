// 기존에는 모듈을 관리하는 폴더를 modules로 명명했었다면,
// Vue3 컴포지션 API가 소개 된 이후 모듈을 관리하는 폴더를
// compositions라고 명명하는 소스코드들이 Github에 많다고 한다.
import { reactive, toRefs } from 'vue';

// localStorage에 데이터 저장
export const useStorage = () => {
    const KEY = 'my-todo-list';
    // 일정 리스트를 가질 todos속성과
    // 신규 id를 책정할 수 있는 strage_id를 가진 객체
    // 객체에 반응성을 주기위한 reactive 함수 이용
    const storage_obj = reactive({ storage_id: 0 });

    const loadTodos = (initTodos) => {
        let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]');
        temp_todos.forEach((todo, idx) => {
            todo.id = idx;
        });
        storage_obj.storage_id = temp_todos.length;
        initTodos(temp_todos);
    }

    const saveTodos = (toods) => {
        localStorage.setItem(KEY, JSON.stringify(todos.value));
    }

    return {
        // toRefs: 객체의 내부 속성들 모두에게 반응성 더해주기
        ...toRefs(storage_obj),
        loadTodos,
        saveTodos,
    }
}