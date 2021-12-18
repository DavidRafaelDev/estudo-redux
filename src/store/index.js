import { createStore } from 'redux';

const INITIAL_STATE = {
    activeModule: {id: 0, title: ''},
    activeLesson: {id: 0, title: ''},
    modules: [{
        id: 1, title: 'iniciando com react', lessons: [
            { id: 1, title: "primeira aula" },
            { id: 2, title: "Segunda aula" }
        ],
    },
    {
        id: 2, title: 'iniciando com react 2', lessons: [
            { id: 3, title: "terceira aula" },
            { id: 4, title: "quarta aula" }
        ]
    }]
}
function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'TOGGLE_LESSON'){
        console.log(action);
        return {
            ...state,
            activeModule: action.module,
            activeLesson: action.lesson,
        }
    }
    return state


}
const store = createStore(reducer);

export default store;