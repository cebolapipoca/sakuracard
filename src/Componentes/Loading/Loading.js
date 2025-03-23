import { useState } from 'react';
import './Loading.css'

function Loading(props) {

    const screen = {

    }

    const component = {
        position: 'absolute'
    }

    if(props.screen)
    {
        return (

            <div className='container_loading' style={{display: props.display}}>
                <div className='Loading_circle'  id='circle_extern'>
                    <div className='Loading_circle' id='circle_intern'>
    
                    </div>
                </div>
            </div>
        );
    }
    else
    {
        return (
            <div className='Loading_circle' style={component} id='circle_extern'>
                <div className='Loading_circle' id='circle_intern'>

                </div>
            </div>
        );
    }
};
export default Loading;