
//example todo reducer
export const matchReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return state.concat(action.payload);
        }
        case 'TOGGLE_TODO': {
            const { index } = action.payload;
            return state.map((todo, i) => {
                if (i !== index) return todo;

                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });
        }
        case 'REMOVE_TODO': {
            return state.filter(
                (todo, i) => i !== action.payload.index
            );
        }
        default:
            return state;
    }
}
