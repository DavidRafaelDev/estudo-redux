import React from 'react';
import { connect } from 'react-redux';
const SideBar = ({ modules, dispatch }) => {

    function toggleLesson(module, lesson) {
        return {
            type: 'TOGGLE_LESSON',
            module,
            lesson,
        }
    }
    return (
        <div>
            {modules.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>
                                {lesson.title}
                                <button onClick={() => dispatch(toggleLesson(module, lesson))}> Selecionar </button>
                            </li>

                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default connect(state => ({ modules: state.modules }))(SideBar);
