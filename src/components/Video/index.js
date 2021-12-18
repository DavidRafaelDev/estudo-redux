import React from 'react';

import { connect } from 'react-redux';

const Video = (state) => {
    console.log('click', state);
    return (
        <div>
            <h3>Modulo: {state.state.activeModule.title || ''} </h3>
            <h3>Aula: {state.state.activeLesson.title || ''} </h3>
        </div>
    )
}

export default connect(state => ({
    state
}))(Video)