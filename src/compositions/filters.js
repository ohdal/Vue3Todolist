import { inject } from 'vue';

export const useFilter = () => {
    const today = inject("today");
    const fnSort = (a, b) => {
        const a_date = Date.parse(a.date);
        const b_date = Date.parse(b.date);
        if(a_date > b_date) return 1;
        else if(a_date < b.date) return 0;
        else return a.id - b.id;
    }

    // 앞으로 해야할 완료되지 않은 todo
    const getPendingTodos = (todos) => {
        return todos.value.filter((todo) => todo.date > today && !todo.completed)
        .slice()
        .sort(fnSort);
    }

    // 오늘날짜의 완료되지 않은 todo
    const getActiveTodayTodos = (todos) => {
        return todos.value
        .filter((todo) => todo.date == today && !todo.completed)
        .slice()
        .sort(fnSort);
    }

    // 오늘날짜의 완료된 todo
    const getCompletedTodayTodos = (todos) => {
        return todos.value
        .filter((todo) => todo.date == today && todo.completed)
        .slice()
        .sort(fnSort);
    }

    // 오늘날짜의 모든 todo
    const getAllTodayTodos = (todos) => {
        return getActiveTodayTodos(todos)
        .concat(getCompletedTodayTodos(todos))
        .slice()
        .sort(fnSort);
    }

    // 모든 todo
    const getAllTodos = (todos) => {
        return todos.value.slice().sort(fnSort);
    }

    return {
        getPendingTodos,
        getActiveTodayTodos,
        getCompletedTodayTodos,
        getAllTodayTodos,
        getAllTodos,
    }
}