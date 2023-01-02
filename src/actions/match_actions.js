const ADD_TODO = 'ADD_TODO';

function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: { text },
    };
}